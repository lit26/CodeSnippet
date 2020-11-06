# Exploratory Data Analysis 

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

x = ... # features
y = ... # label

df = pd.DataFrame(X, columns=...)
print(df.head())

# Understand data
print(df.info())
print(df.describe())
print(x.shape)
print(y.shape)

# Visualize dataset
pd.plot.scatter_matrix(df, c=y, figsize=[8,8], s=150, marker='D')

# Visualize features (count plot)
plt.figure()
sns.countplot(x='education', hue='party', data=df, palette='RdBu')
plt.xticks([0,1], ['No', 'Yes'])
plt.show()
```