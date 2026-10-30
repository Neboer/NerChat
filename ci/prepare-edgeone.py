import json
from pathlib import Path
import shutil
import subprocess

OUTPUT = Path('.vitepress/dist')
IS_DOCS = True
assert (OUTPUT / 'index.html').is_file(), 'Build output is missing'
if IS_DOCS:
    assert (OUTPUT / '404.html').is_file()
    assert (OUTPUT / 'docs/basic/login.html').is_file()
    for page in OUTPUT.rglob('*.html'):
        html = page.read_text()
        assert 'https://www.neboer.site/nerchat' not in html, str(page)
        assert 'href="/nerchat/' not in html and 'src="/nerchat/' not in html, str(page)
else:
    (OUTPUT / '404.html').write_text('<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>404 — 页面不存在</title><h1>404 — 页面不存在</h1><a href="/">返回首页</a></html>')
    assert 'https://nerchat-doc.neboer.site/' in (OUTPUT / 'index.html').read_text()
metadata = {'commit': subprocess.check_output(['git', 'rev-parse', 'HEAD'], text=True).strip()}
(OUTPUT / 'deployment.json').write_text(json.dumps(metadata) + '\n')
shutil.copyfile('edgeone.json', OUTPUT / 'edgeone.json')
files = [p for p in OUTPUT.rglob('*') if p.is_file()]
assert len(files) <= 20000, 'EdgeOne file limit exceeded'
assert max(p.stat().st_size for p in files) <= 25 * 1024 * 1024, 'EdgeOne single-file limit exceeded'
print('Validated', len(files), 'static files, commit', metadata['commit'])
