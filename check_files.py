import os
import re

def is_valid_local_link(link, base_path):
    # 去除链接末尾可能存在的 / 或 #xxx
    link = re.sub(r'[/#].*$', '', link)
    # 加上 .md 扩展名
    link += '.md'
    # 检查文件是否存在
    return os.path.isfile(os.path.join(base_path, link))

def check_local_links(directory):
    md_link_pattern = re.compile(r'\[.*?\]\((\.\/.*?)\)')
    invalid_links = []

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    links = md_link_pattern.findall(content)
                    for link in links:
                        if not is_valid_local_link(link, root):
                            invalid_links.append((file_path, link))

    return invalid_links

if __name__ == "__main__":
    directory = "src/docs/"
    invalid_links = check_local_links(directory)
    
    if invalid_links:
        print("以下文件包含无效的本地链接:")
        for file_path, link in invalid_links:
            print(f"文件: {file_path}, 链接: {link}")
    else:
        print("所有本地链接均有效。")
