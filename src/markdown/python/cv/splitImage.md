# Split Images to train test folder

From:
- Dogs
- Cats

To:
- Train
    - Dogs
    - Cats
- Test
    - Dogs
    - Cats

```python
# Parameters
from shutil import copyfile
dataset_base = 'dataset/'
classes = ['Dogs','Cats']
train_percent = 0.8

n_images = 1400
n_train = int(n_images*train_percent)

# Explore Files
for each_class in classes:
    for root, dirs, files in os.walk(os.path.join(dataset_base, each_class)):
        print("%s directory has %d images." % (each_class, len(files)))

# Make directory
base_path = os.path.join(project_base,'train_test')
os.mkdir(base_path)
train_path = os.path.join(base_path, 'train')
os.mkdir(train_path)
test_path = os.path.join(base_path,'test')
os.mkdir(test_path)

# Split Images to train and test
allFiles = []
base_path = dataset_base
for each_class in classes:
    print("Coping %s images..." %(each_class))
    all_imgs = os.listdir(os.path.join(base_path, each_class))
    all_imgs = [f for f in all_imgs if not f.startswith('.')]
    random.seed(1)
    random.shuffle(all_imgs)
    train_imgs = all_imgs[:n_train]
    test_imgs = all_imgs[n_train:n_images]
    
    train_test_dir = os.path.join(project_base, 'train_test')
    # copy each class to train directory
    os.mkdir(os.path.join(train_test_dir, 'train', each_class))
    for j in range(len(train_imgs)):
        original_path = os.path.join(base_path, each_class, train_imgs[j])
        new_path = os.path.join(train_test_dir, 'train', each_class, train_imgs[j])
        copyfile(original_path, new_path)
    
    # copy each class to test directory
    os.mkdir(os.path.join(train_test_dir, 'test', each_class))
    for j in range(len(test_imgs)):
        original_path = os.path.join(base_path, each_class, test_imgs[j])
        new_path = os.path.join(train_test_dir, 'test', each_class, test_imgs[j])
        copyfile(original_path, new_path)
print('Split image complete.')
```
