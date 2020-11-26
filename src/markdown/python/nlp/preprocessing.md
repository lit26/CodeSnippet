# Natural Language Processing - Preprocessing

## Clean Data
### Remove punctuation
```python
import string
import pandas as pd

def remove_punc(text):
    return "".join([char for char in text if char not in string.punctuation])

df['text_new'] = df['text'].apply(lamdba x: remove_punc(x))
```
### Tokenization
```python
import re 
def tokenize(text):
    return re.split('\W+', text)

df['text_token'] = df['text_new'].apply(lambda x: tokenize(x.lower()))
```

### Remove Stop Words 
```python
import nltk

stopword = nltk.corpus.stopwords.words('english')
def remove_stopwords(text):
    return [word for word in text if word not in stopword]

df['text_no_stop'] = df['text_token'].apply(lambda x: remove_stopwords(x)
```

### Stemming
```python
ps = nltk.PorterStemmer()

def stemming(text):
    return [ps.stem(word) for word in text]

df['text_stemmed'] = df['text_no_stop'].apply(lambda x: stemming(x)
```

### Lemmatization
```python
wn = nltk.WordNetLemmatizer()
def lemmatizing(text):
    return [wn.lemmatize(word) for word in text]

df['text_lemmatized'] = df['text_no_stop'].apply(lambda x: lemmatizing(x)
```

### Wrapping
```python
import nltk
import string
stopword = nltk.corpus.stopwords.words('english')
ps = nltk.PorterStemmer()

def clean_text(text):
    text = "".join([word.lower() for word in text if word not in string.punctuation])
    tokens = re.split('\W+', text)
    text = [ps.stem(word) for word in tokens if word not in stopword]
    return text
```

### Twitter Post (extra)
```python
import re 

def tweet_cleaner(text):
    # remove mention
    text = re.sub(r'@[A-Za-z0-9]+', '', text)
    # remove website
    text = re.sub(r'https?://[A-Za-z0-9./]+', '',text)
    # remove non-ASCII
    text = re.sub(r'[^\x00-\x7F]+',' ', text)
    return text
```

## Vectorizing Data
### Count Vectorize
```python
from sklearn.feature_extraction.text import CountVectorizer

count_vect = CountVectorizer(analyzer=clean_text)
X_counts = count_vect.fit_transform(df['text'])
```
### N-Grams
```python
from sklearn.feature_extraction.text import CountVectorizer

ngram_vect = CountVectorizer(ngram_range=(2,2),analyzer=clean_text) 
X_counts = ngram_vect.fit_transform(df['text'])

```
Using gensim
```python
doc_full = df['text'].to_list()
# bigram mode
bigram = gensim.models.Phrases([i.split() for i in doc_full], min_count=5, threshold=100)
bigram_mod = gensim.models.phrases.Phraser(bigram)
# bigram text
text = bigram_mod[text]
```
### TF_IDF
```python
from sklearn.feature_extraction.text import TfidfVectorizer

tfidf_vect = TfidfVectorizer(analyzer=clean_text)
X_tfidf = tfidf_vect.fit_transform(df['text'])
```

