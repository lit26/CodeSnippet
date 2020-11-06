# Image Data Extract

## Google Open Image Dataset

Load data from csv file
- train-images-boxable.csv file contains the image name and image url
- train-annotations-bbox.csv file contains the bounding box info with the image id (name) and the image label name
- class-descriptions-boxable.csv file contains the image label name corresponding to its class name

Source: https://storage.googleapis.com/openimages/web/download.html 

https://www.figure-eight.com/dataset/open-images-annotated-with-bounding-boxes/

```python
# parameter
base_path = ''
export_path = ''
images_boxable_fname = 'train-images-boxable.csv'
annotations_bbox_fname = 'train-annotations-bbox.csv'
class_descriptions_fname = 'class-descriptions-boxable.csv'
```

### Common Functions
```python
# get subset of the whole subset
def getSubsetImage(img_id):
  # Shuffle the data
  copy_img_id = img_id.copy()
  random.seed(1)
  random.shuffle(copy_img_id)

  # Extract n images, this part cost time
  sub_img_id = copy_img_id[:n]
  return [images_boxable[images_boxable['image_name']==name+'.jpg'] for name in sub_img_id]

# save Image_url to csv files
def saveImageURL(label, sub_img_url):
  sub_pd = pd.DataFrame()
  for i in range(len(sub_img_url)):
      sub_pd = sub_pd.append(sub_img_url[i], ignore_index = True)

  sub_pd.to_csv(os.path.join(export_path, 'sub'+label+'_img_url.csv'))
  return [url['image_url'].values[0] for url in sub_img_url]

# download images to the folder
def downloadImages(sub_img_url, saved_dir):
  os.mkdir(saved_dir)
  for url in sub_img_url:
    img = io.imread(url)
    saved_path = os.path.join(saved_dir, url[-20:])
    io.imsave(saved_path, img)
```

### Image Data Extraction
```python
for label in label_list:
  print("Extract image: "+ label)
  # Find the label_name for the label class
  dataset_pd = class_descriptions[class_descriptions['class']==label]
  label_name = dataset_pd['name'].values[0]

  # Find the number of images in the dataset
  dataset_bbox = annotations_bbox[annotations_bbox['LabelName']==label_name]
  print('There are %d %s in the dataset.' %(len(dataset_bbox), label))
  img_id = np.unique(dataset_bbox['ImageID'])
  print('There are %d images which contain %s.' % (len(img_id), label))

  # Get image subset
  sub_img_url = getSubsetImage(img_id)
  print('Getting subset complete.')

  # save image_url data to csv 
  sub_img_url = saveImageURL(label, sub_img_url)
  print("URL saved to csv file.")

  # Download images
  saved_dir = os.path.join(export_path,label)
  downloadImages(sub_img_url, saved_dir)
  print("Download complete.")
  print()
```
