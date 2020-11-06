# Dictionary and Corpus

```python
# Gensim
import gensim
import gensim.corpora as corpora

dictionary = corpora.Dictionary(doc_text)
# filter words which occurance is below
dictionary.filter_extremes(no_below=5)
corpus = [dictionary.doc2bow(doc) for doc in doc_text]
# using tf-idf
tfidf = models.TfidfModel(corpus)
corpus_tfidf = tfidf[corpus]
```