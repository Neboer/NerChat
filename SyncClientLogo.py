import requests
from bs4 import BeautifulSoup
import os


def download_logo(url, output_dir='src/assets/MatrixGet'):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    os.makedirs(output_dir, exist_ok=True)

    main_content = soup.find('main')

    if main_content:
        for img in main_content.find_all('img', src=True):
            src = img['src']
            if src.endswith('.svg') or src.endswith('.png'):
                img_url = src
                if not img_url.startswith('http'):
                    img_url = requests.compat.urljoin(url, img_url)

                img_response = requests.get(img_url)
                if img_response.status_code == 200:
                    img_filename = os.path.join(output_dir, os.path.basename(img_url))
                    with open(img_filename, 'wb') as f:
                        f.write(img_response.content)
                    print(f'Downloaded {img_filename}')

    print('All SVG and PNG files from <main> have been downloaded.')
