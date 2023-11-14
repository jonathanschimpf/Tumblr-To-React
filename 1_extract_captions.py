import os
import json
import re
from bs4 import BeautifulSoup

def extract_number(filename):
    # This will match the first sequence of digits in the filename
    match = re.search(r'\d+', filename)
    if match:
        return int(match.group())
    return 0  # If no number is found, return 0

# The directory where my HTML files are stored relative to extract_captions.py script
html_directory = 'src/tumblr-assets/html-holding-the-captions'
captions = []
captions_set = set()  # A set to keep track of unique captions

# Get all HTML files, extract numbers, and sort them based on those numbers
html_files = sorted(
    [file for file in os.listdir(html_directory) if file.endswith('.html')],
    key=extract_number,
    reverse=True  # This will sort the files in descending order
)

# Loop through all sorted HTML files in the directory
for filename in html_files:
    filepath = os.path.join(html_directory, filename)
    with open(filepath, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file.read(), 'html.parser')
        # Find all <p> tags and extract text
        for p_tag in soup.find_all('p'):
            caption_text = p_tag.text.strip()  # <---- strip() removes leading/trailing whitespace
            if caption_text not in captions_set:  # <------ Check if the caption is unique
                captions.append(caption_text)
                captions_set.add(caption_text)  # <------ Add the caption to the set

# Save the extracted captions to a JSON file in the 'public' directory
with open('public/captions.json', 'w', encoding='utf-8') as json_file:
    json.dump(captions, json_file, ensure_ascii=False, indent=2)
