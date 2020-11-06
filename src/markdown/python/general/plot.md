# Plots

## Matplotlib
Full Documentation: [https://matplotlib.org/index.html](https://matplotlib.org/index.html)

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()  # Create a figure and an axes.
ax.plot(x, x, label='linear')  # Plot some data on the axes.
ax.plot(x, x**2, label='quadratic')  # Plot more data on the axes...
ax.plot(x, x**3, label='cubic')  # ... and some more.
ax.set_xlabel('x label')  # Add an x-label to the axes.
ax.set_ylabel('y label')  # Add a y-label to the axes.
ax.set_title("Simple Plot")  # Add a title to the axes.
ax.legend()  # Add a legend.
```
or
```python
import matplotlib.pyplot as plt
x = np.linspace(0, 2, 100)

plt.plot(x, x, label='linear')  # Plot some data on the (implicit) axes.
plt.plot(x, x**2, label='quadratic')  # etc.
plt.plot(x, x**3, label='cubic')
plt.xlabel('x label')
plt.ylabel('y label')
plt.title("Simple Plot")
plt.legend()
```

## Seaborn
Full Documentation: [https://seaborn.pydata.org/](https://seaborn.pydata.org/)

### relplot (relational)
- scatterplot
- lineplot

```python
import seaborn as sns
sns.set_theme(style="darkgrid")

# Relating variables with scatter plots
sns.relplot(x=x, y=y, data=df);
# third variable
sns.relplot(x=x, y=y, hue="feature1",data=df);

# Line plot
sns.lineplot(data=df, x=x, y=y)
```

### displot (distributions)
- histplot
- kdeplot
- ecdfplot
- rugplot

```python
# histgram
sns.histplot(data=df, x=x)
# add kde
sns.histplot(data=df, x=x, kde=True)

# kernel density estimate
sns.kdeplot(data=df, x=x)
sns.kdeplot(data=df, y=y)

# empirical cumulative distribution functions
sns.ecdfplot(data=df, x=x)
sns.ecdfplot(data=df, y=y)

# rug
sns.rugplot(data=df, x=x)
sns.rugplot(data=df, y=y)

```
### catplot (categorical)
- stripplot
- swarmplot
- boxplot
- violinplot
- pointplot
- barplot

```python
import seaborn as sns

# stripplot
ax = sns.stripplot(x=x, y=y, data=df)
# swarmplot
ax = sns.swarmplot(x=x, y=y, data=df)
# boxplot
ax = sns.boxplot(x=x, y=y, data=df)
# violinplot
ax = sns.violinplot(x=x, y=y, data=df)
# barplot
ax = sns.barplot(x=x, y=y, data=df)
```
