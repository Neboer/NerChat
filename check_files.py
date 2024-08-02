import os
import re


def is_valid_local_link(link, base_path):
    # 去除链接末尾可能存在的 / 或 #xxx
    bare_link = link

    if link.endswith("/"):
        bare_link = link[:-1]
    elif link.split("/")[-1].find("#") != -1:
        bare_link = bare_link[: bare_link.find("#")]
        if bare_link.endswith("/"):
            bare_link = bare_link[:-1]
    file_paths_to_check = [bare_link, bare_link + ".md"]

    return any(
        (
            os.path.isfile(os.path.join(base_path, file_path))
            for file_path in file_paths_to_check
        )
    )


def check_local_links(directory):
    md_link_pattern = re.compile(r"\[.*?\]\(((?!http)[^\s)]+)\)")
    invalid_links = []

    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8") as f:
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
