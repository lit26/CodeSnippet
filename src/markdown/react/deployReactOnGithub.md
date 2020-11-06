# Deploy React App to Github Pages

## Install Github Pages
```
npm install gh-pages --save-dev
```
## Add properties to package.json file
Replace username and repo-name with your own
```json
"homepage": "http://{{username}}.github.io/{repo-name}"
...
"scripts": {
    //...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
```

## Deploy
```
npm run reploy
```
