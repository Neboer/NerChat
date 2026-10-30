import json
from pathlib import Path
import sys
import urllib.request
import urllib.error
import urllib.parse
import re

IS_DOCS = True
OUTPUT = Path('.vitepress/dist')
class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None
opener = urllib.request.build_opener(NoRedirect())
if sys.argv[1] in ['preview', 'production']:
    url = json.loads(Path('.deploy/' + sys.argv[1] + '.json').read_text())['url']
else:
    url = sys.argv[1]
parts = urllib.parse.urlsplit(url)
base = parts.scheme + '://' + parts.netloc
if parts.query:
    opener.open(url, timeout=60).close()
def get(path):
    try:
        return opener.open(base + path, timeout=60)
    except urllib.error.HTTPError as response:
        return response
for path in (['/', '/team', '/team.html', '/docs/', '/docs/basic/login', '/docs/basic/login.html', '/favicon_logo/site.webmanifest', '/sitemap.xml'] if IS_DOCS else ['/']):
    response = get(path)
    assert response.status == 200, (path, response.status)
    html = response.read().decode()
    if IS_DOCS:
        assert 'https://www.neboer.site/nerchat' not in html
        assert 'href="/nerchat/' not in html and 'src="/nerchat/' not in html
    print('HTTP OK', path)
response = get('/deployment.json')
assert response.status == 200
assert json.loads(response.read()) == json.loads((OUTPUT / 'deployment.json').read_text()), 'Wrong deployed commit'
response = get('/__deployment_missing_page_404')
assert response.status == 404, ('Expected real 404', response.status)
print('HTTP 404 OK')
response = get('/')
assert 'no-cache' in response.headers.get('Cache-Control', ''), dict(response.headers)
assert response.headers.get('X-Content-Type-Options') == 'nosniff'
if IS_DOCS:
    html = response.read().decode()
    asset = re.search(r'(?:src|href)="(/assets/[^" ]+\.js)"', html)
    assert asset, 'VitePress entry asset is missing'
    response = get(asset[1])
    assert response.status == 200 and 'immutable' in response.headers.get('Cache-Control', ''), dict(response.headers)
else:
    for path, destination in [('/nerchat', '/'), ('/nerchat/', '/'), ('/nerchat/docs/basic/login?probe=a%20b&x=1', '/docs/basic/login?probe=a%20b&x=1'), ('/nerchat/team.html', '/team.html')]:
        response = get(path)
        assert response.status == 308, (path, response.status)
        assert response.headers.get('Location') == 'https://nerchat-doc.neboer.site' + destination, (path, dict(response.headers))
        print('REDIRECT OK', path)
print('HTTP verification passed')
