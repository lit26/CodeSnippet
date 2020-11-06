# Topic Modeling

## Latent Dirichlet allocation (LDA)
```python
from gensim import models, corpora
from gensim.models import CoherenceModel

import pyLDAvis
import pyLDAvis.gensim 

# clean data
# see nlp-preprocessing 

# create dictionary and corpus
# see nlp-Dictionary and Corpus

ldamodel = models.ldamulticore.LdaMulticore(corpus=corpus_tfidf, 
                                            num_topics=num_topics, 
                                            id2word=dictionary,
                                            workers=6,
                                            passes=20)

# save ldamodel
with open(base_path+"lda_model.pkl", "wb") as fp: 
    pickle.dump(ldamodel, fp)

# load ldamodel
ldamodel = None
with open(base_path+"lda_model.pkl", "rb") as fp: 
    ldamodel = pickle.load(fp)

# print topic and keywords
for idx, topic in ldamodel.print_topics(-1):
    print("Topic: {} \nWords: {}".format(idx, topic ))

# Performance
## Compute perplexity
perplexity = ldamodel.log_perplexity(corpus_tfidf)
## Compute Coherence Score
coherence_model_lda = CoherenceModel(model=ldamodel, 
                                    texts=doc_text, 
                                    dictionary=dictionary, 
                                    coherence='c_v')
score = coherence_model_lda.get_coherence()

# Visualize the topics
pyLDAvis.enable_notebook()
vis = pyLDAvis.gensim.prepare(lda_model, corpus, id2word)

```