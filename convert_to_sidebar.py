import os
import yaml
import re

def parse_frontmatter(file_path):
    frontmatter = {}
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
        if match:
            frontmatter = yaml.safe_load(match.group(1))
    if 'title' not in frontmatter:
        frontmatter['title'] = os.path.basename(file_path)
    return frontmatter

def generate_directory_structure(root_dir):
    def process_directory(directory_path):
        structure = []
        files = os.listdir(directory_path)
        if 'README.md' in files:
            readme_path = os.path.join(directory_path, 'README.md')
            folder_name = os.path.basename(directory_path)
            item = {'text': folder_name, 'items': []}
            structure.append(item)

            frontmatter = parse_frontmatter(readme_path)
            order = frontmatter.get('order')
            next_path = frontmatter.get('next')

            if order is not None:
                item['order'] = int(order)
            if next_path is not None:
                item['next'] = next_path

            for file in files:
                if file.endswith('.md') and file != 'README.md':
                    file_path = os.path.join(directory_path, file)
                    frontmatter = parse_frontmatter(file_path)
                    file_name = os.path.splitext(file)[0]
                    link = os.path.relpath(file_path, root_dir).replace('\\', '/')
                    item['items'].append({'text': frontmatter['title'], 'link': f'/docs/{link}'})
        
        # Recursively process subdirectories
        subdirectories = [d for d in files if os.path.isdir(os.path.join(directory_path, d))]
        for subdir in subdirectories:
            subdir_path = os.path.join(directory_path, subdir)
            structure.extend(process_directory(subdir_path))
        
        return sorted(structure, key=lambda x: x.get('order', float('inf')))

    structure = process_directory(root_dir)
    return structure

# Example usage:
if __name__ == "__main__":
    root_directory = 'docs'
    structure = generate_directory_structure(root_directory)
    print(structure)
