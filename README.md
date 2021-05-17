# Getting Started with react-redux-blog project

This project consume [Json Place Holder API](https://jsonplaceholder.typicode.com/).

## Installation

IT requires [Node.js](https://nodejs.org/).
clone the project and goto the react-redux-blog folder where package.json reside then
Install the dependencies and start the server. You can install redux dev tools extension for chrome from [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en).

```sh
cd react-redux-blog
npm install
npm start
```

## Features

- list view for user, post
- search while typing on list view both for user and post
- details view both for user and post
- show comments for specific post and hide them
- sort posts by user
- live search in dropdown using react-select
- add post using react-hook-form
- for validation used hookform/resolvers and yup

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
