# Machine Learning Model

## Linear Regression

<details>

```python
from sklearn.linear_model import LinearRegression
reg = LinearRegression()

y_train = df['label'].values
X_train = df.drop('label', axis=1).values
# train model
reg.fit(X_train, y_train)

# X_train.shape (1000,15)
# y_train.shape (1000,1)

# predict model
y_pred = reg.predict(X_test)

# X_test.shape (3,15)
# y_pred.shape (3,1)

```
</details>

## Logistic Regression

<details>

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression(random_state=0)

y_train = df['label'].values
X_train = df.drop('label', axis=1).values
# train model
clf.fit(X_train, y_train)

# X_train.shape (1000,15)
# y_train.shape (1000,1)

# predict model
y_pred = clf.predict(X_test)

# X_test.shape (3,15)
# y_pred.shape (3,1)

```
</details>

## K-nearest neighbors

<details>

```python
from sklearn.neighbors import KNeighborsClassifier
knn = KNeighborsClassifier(n_neighbors=4)

y_train = df['label'].values
X_train = df.drop('label', axis=1).values
# train model
knn.fit(X_train, y_train)

# X_train.shape (1000,15)
# y_train.shape (1000,1)

# predict model
y_pred = knn.predict(X_test)

# X_test.shape (3,15)
# y_pred.shape (3,1)

```
</details>

## Naive Bayes

<details>

```python
from sklearn.naive_bayes import GaussianNB
clf = GaussianNB()

y_train = df['label'].values
X_train = df.drop('label', axis=1).values
# train model
clf.fit(X_train, y_train)

# X_train.shape (1000,15)
# y_train.shape (1000,1)

# predict model
y_pred = clf.predict(X_test)

# X_test.shape (3,15)
# y_pred.shape (3,1)
```
</details>

## Decision Tree

<details>

```python
from sklearn.tree import DecisionTreeClassifier
clf = DecisionTreeClassifier(random_state=0)

y_train = df['label'].values
X_train = df.drop('label', axis=1).values
# train model
clf.fit(X_train, y_train)

# X_train.shape (1000,15)
# y_train.shape (1000,1)

# predict model
y_pred = clf.predict(X_test)

# X_test.shape (3,15)
# y_pred.shape (3,1)
```
</details>

## Random Forest

<details>

```python
from sklearn.tree import RandomForestClassifier
clf = RandomForestClassifier(max_depth=2, random_state=0)

y_train = df['label'].values
X_train = df.drop('label', axis=1).values
# train model
clf.fit(X_train, y_train)

# X_train.shape (1000,15)
# y_train.shape (1000,1)

# predict model
y_pred = clf.predict(X_test)

# X_test.shape (3,15)
# y_pred.shape (3,1)
```
</details>

## Support Vector Classifier

<details>

```python
from sklearn import svm

clf = svm.SVC()

y_train = df['label'].values
X_train = df.drop('label', axis=1).values
# train model
clf.fit(X_train, y_train)

# X_train.shape (1000,15)
# y_train.shape (1000,1)

# predict model
y_pred = clf.predict(X_test)

# X_test.shape (3,15)
# y_pred.shape (3,1)
```
</details>

## Performance
```python
model.score(X_test, y_test)

# cross validation
from sklearn.model_selection import cross_val_score
cv = cross_val_score(model, X_train, y_train, cv=5)
```

