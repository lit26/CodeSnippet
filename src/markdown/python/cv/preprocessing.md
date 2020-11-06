# Preprocessing
```python
# example: cifar 10
from tensorflow.keras.datasets import cifar10
from tensorflow.keras.utils import to_categorical
(trainX, trainY), (testX, testY) = cifar10.load_data()
```

```python
# Scale data (0-255) -> (0-1)
trainX = trainX / 255.0
testX = testX / 255.0

# or Normalize data
# Normalize data
x_train=x_train.astype("float32")  
x_test=x_test.astype("float32")
x_mean=np.mean(x_train)
x_std=np.std(x_train)
x_test=(x_test-x_mean)/x_std
x_train=(x_train-x_mean)/x_std

# Categorical label
trainY = to_categorical(trainY)
testY = to_categorical(testY)
```

## Data Argumentation
```python
datagen = ImageDataGenerator(
    rotation_range=20,
    horizontal_flip=True,
    width_shift_range=0.2,
    height_shift_range=0.2,
    zoom_range=0.3
    )
datagen.fit(x_train)
```