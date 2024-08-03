import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md
import re
from SyncClientLogo import download_logo

def fetch_webpage(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        raise Exception(f"Failed to fetch webpage: {response.status_code}")


def parse_html(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    for div in soup.find_all('div', class_='filters'):
        div.decompose()
    for div in soup.find_all('h1'):
        div.decompose()
    article = soup.find('main')
    return article


def convert_to_markdown(soup):
    return md(str(soup))


def save_markdown(content, file_path):
    content = re.sub(r'\n\s*\n', '\n\n', content)
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)


def main(url, file_path):
    html_content = fetch_webpage(url)
    soup = parse_html(html_content)
    markdown_content = convert_to_markdown(soup)
    save_markdown(markdown_content, file_path)
    print(f"Markdown content saved to {file_path}")


def modify_and_replace_file(file_path, old_article_path, pic, replacement, keywords=None, platforms=None):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    new_lines = []

    for line in lines:
        stripped_line = line.strip()

        if keywords and any(keyword in stripped_line for keyword in keywords):
            continue

        if platforms and len(stripped_line.split()) == 1:
            def replace_function(match):
                platform = match.group(0)
                return f'<Badge type="tip" text="{platform}" />'

            for platform in platforms:
                pattern = re.compile(re.escape(platform), re.IGNORECASE)
                stripped_line = pattern.sub(replace_function, stripped_line)

        new_lines.append(stripped_line + '\n')  # 添加修改后的行到列表

    content = ''.join(new_lines)
    content = re.sub(pic, replacement, content)

    with open(old_article_path, 'r', encoding='utf-8') as old_file:
        old_article_content = old_file.read()

    new_content = old_article_content + '\n\n' + '## Matrix官网上的其他推荐客户端' + '\n\n' + content
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(new_content)


keywords = ['down-arrow.svg', 'Open client details']

platforms = ['iOS', 'Android', 'Linux', 'Web', 'Windows', 'macOS']

pic = r'\[!\[.*?\]\((.*?\.(?:svg|png))\)\n### (.*)'
replacement = r'<div style="display: flex; align-items: center;">\n  <img src="../../assets/MatrixGet/\1" style="width:64px; margin-right:16px; margin-top: 32px"/>\n  <h3>\2</h3>\n</div>'

url = 'https://matrix.org/ecosystem/clients/'
file_path = 'src/docs/client/other-clients.md'
old_article_path = 'src/docs/client/other-clients-basic.md'

download_logo(url)
main(url, file_path)
modify_and_replace_file(file_path, old_article_path, pic, replacement, keywords=keywords, platforms=platforms)
