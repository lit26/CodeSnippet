# Deploy React App to Firebase

## Add Project on Firebase Console

Optionally enable Google Analytics.

## Register Web App

* Click on your project
* Click on the `</>` icon
* Click the box (Also set up Firebase Hosting for this app)

## Install Firebase

Go to your local terminal

```
npm install -g firebase-tools
```
## Login in to your firebase on local terminal
```
firebase login
```
Select the gmail account with firebase

## Deploy apps
```
firebase init
```
Choose `Hosting: Configure and deploy Firebase Hosting sites` for hosting web apps (Be aware use `spacebar` to select option)

Choose the option (ex: Use an existing project, Create a new project, etc...)

What do you want to use as your public directory? (this is for React)
```
build
```

Deploy apps
```
npm run build
firebase deploy
```

