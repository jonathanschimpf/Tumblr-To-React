import os

#Python helping to find the difference between HTML and photo files. Turns out my first post was just Text based LMAO

html_dir = 'src/tumblr-assets/html-holding-the-captions'
image_dir = 'src/tumblr-assets/images'

# Get the list of file names without extensions
html_files = {os.path.splitext(file)[0] for file in os.listdir(html_dir) if file.endswith('.html')}
image_files = {os.path.splitext(file)[0] for file in os.listdir(image_dir) if file.endswith(('.jpg', '.png'))}

# Find the difference between the two sets
html_not_in_images = html_files - image_files
images_not_in_html = image_files - html_files

# Print out the results
print("HTML files without corresponding images:", html_not_in_images)
print("Image files without corresponding HTML files:", images_not_in_html)
