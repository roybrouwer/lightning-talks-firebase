# LightningTalks - Firebase

This is the source code created in the live demo of the Lightning Talks.

## Steps to get this project running

#### Create a new Firebase project

Go to https://console.firebase.google.com/ and create a new project.

#### Create a web app

You can add a web app in the project settings, in the "Your apps" section. Check the "Also setup Firebase Hosting" checkbox.

#### Copy the web app config

After creating the web app, copy the config to the Angular environment files.

#### Enable Firestore Database

In the left menu you can go to the Firestore Database to enable it.

#### Enable Authentication

Go to the authentication and enable the "Email/Password" method. After enabling the method, click on the "Users" tab and create a new user.

## Deploy to Firebase hosting

#### Install Firebase CLI

Run in `npm install -g firebase-tools` in your terminal

#### Init Firebase tools

In you Angular project run `firebase init`. Select "Hosting" and pick you project from the existing projects. (if it's the first time you use firebase tools, you have to login)

#### Build Angular app

Run `ng build` like you would normally build your Angular app.

#### Deploy to the web

Deploy your project to the web by running `firebase deploy`.
