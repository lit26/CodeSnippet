import reactRouter from '../markdown/react/reactRouter.md'
import reactRedux from '../markdown/react/reactRedux.md'
import styling from '../markdown/react/styling.md'
import localStorage from '../markdown/react/localStorage.md'
import deployReactOnFirebase from '../markdown/react/deployReactOnFirebase.md'
import deployReactOnGithub from '../markdown/react/deployReactOnGithub.md'

import webscrap from '../markdown/python/general/webScrap.md'
import plot from '../markdown/python/general/plot.md'
import os from '../markdown/python/general/os.md'
import time from  '../markdown/python/general/time.md'

import eda from '../markdown/python/mlds/eda.md'
import mlmodel from '../markdown/python/mlds/model.md'

import cv_imageDataExtract from '../markdown/python/cv/imageDataExtract.md';
import cv_splitImage from '../markdown/python/cv/splitImage.md';
import cv_preprocessing from '../markdown/python/cv/preprocessing.md';
import cv_imageClassification from '../markdown/python/cv/imageClassification.md';

import nlp_preprocessing from '../markdown/python/nlp/preprocessing.md'
import nlp_dictionaryCorpus from '../markdown/python/nlp/dictonary_corpus.md'
import nlp_topicModel from '../markdown/python/nlp/topic_model.md'

import rl_env from '../markdown/python/rl/env.md'

const Urldict = {
    "React": {
        "General":{
            "React Router": reactRouter,
            "React Redux": reactRedux,
            "Styling": styling,
            "Local Storage": localStorage,
        },
        "Deployment":{
            "React.js Firebase": deployReactOnFirebase,
            "React.js Github": deployReactOnGithub
        }
    },
    "Python": {
        "General":{
            "Web Scrap": webscrap,
            "Plot": plot,
            "OS": os,
            "Datetime": time
        },
        "MLDS":{
            "EDA":eda,
            "ML Model": mlmodel,
        },
        "CV":{
            "Extract Data": cv_imageDataExtract,
            "Split Folder": cv_splitImage,
            "Preprocessing":cv_preprocessing,
            "Image Classification":cv_imageClassification
        },
        "NLP":{
            "Preprocessing": nlp_preprocessing,
            "Dictionary & Corpus": nlp_dictionaryCorpus,
            "Topic Modeling": nlp_topicModel
        },
        "RL":{
            "Environment": rl_env
        }

    }
}

export default Urldict;