# Image Classification
## Keras
Full Documentation: [https://keras.io/api/](https://keras.io/api/)

```python
import matplotlib.pyplot as plt
import numpy as np
import os
import PIL
import tensorflow as tf

from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Sequential
```

## Model Layer

```python
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Dense, Flatten
from tensorflow.keras import Sequential

def model():
    model = Sequential()
    
    # block 1 (Conv layer, MaxPooling layer)
    model.add(Conv2D(filters=6, 
                    kernel_size=(5,5), 
                    activation='relu',
                    strides=(1,1),             
                    input_shape=(32,32,3)))
    model.add(MaxPooling2D(pool_size=(2, 2), 
                            padding="valid"))
    
    # block 2 (Conv layer, MaxPooling layer)
    model.add(Conv2D(filters=16, 
                    kernel_size=(5,5), 
                    activation='relu',
                    strides=(1,1)))
    model.add(MaxPooling2D(pool_size=(2, 2), 
                            padding="valid"))

    model.add(Flatten())

    # block 3 (Fully Connection layer)
    model.add(Dense(units=120, activation='relu'))
    
    # block 4 (Fully Connection layer)
    model.add(Dense(units=84, activation='relu'))

    # block 5 (Output layer)
    model.add(Dense(units=10, activation = 'softmax'))

    # model.summary()
    return model
```

## General Layers
```python
# Convolution Layer
model.add(Conv2D(filters=6, 
                    kernel_size=(5,5), 
                    activation='relu',
                    strides=(1,1),             
                    input_shape=(32,32,3)))

# Fully Connected Layer
model.add(Flatten())
# or
model.add(Dense(units=120, activation='relu'))

# Batch Normalization Layer
model.add(BatchNormalization())

# Dropout Layer
model.add(Dropout(0.5))
```

## Compile
```python
from tensorflow.keras.optimizers import Adam

adam=Adam(lr=0.001)
model.compile(loss='categorical_crossentropy', metrics=['accuracy'],optimizer=adam)
```

## Fit data
```python
# fit data generator
history = model.fit_generator(datagen.flow(x_train, y_train, 
                             batch_size=256),
                             validation_data=(x_test, y_test), 
                             epochs=150, 
                             verbose=2)

# fit data
history = model.fit(trainX, trainY, 
                    validation_data=(testX, testY), 
                    epochs=30, 
                    batch_size=200, 
                    verbose=1)
```

## Result analsis
```python
from matplotlib import pyplot as plt

scores = model.evaluate(testX, testY, verbose=0)
fig = plt.figure()
plt.plot(history.history['accuracy'])
plt.title('Training Accuracy')
plt.ylabel('Accuracy')
plt.xlabel('Epoch')
plt.show()

fig = plt.figure()
plt.plot(history.history['val_accuracy'])
plt.title('Testing Accuracy')
plt.ylabel('Accuracy')
plt.xlabel('Epoch')
plt.show()

fig = plt.figure()
plt.plot(history.history['loss'])
plt.title('Training loss')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.show()

fig = plt.figure()
plt.plot(history.history['val_loss'])
plt.title('Testing loss')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.show()
print('Test loss:', scores[0])
print('Test accuracy:', scores[1])
print()
```