Thanks to Miguel Grinberg for the Course Tutorial.\
Credits: https://blog.miguelgrinberg.com/post/introducing-the-react-mega-tutorial

# Getting App Ready

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## For Chapter 5: Backend Connecting
Use Microblog API from github: https://github.com/miguelgrinberg/microblog-api/blob/main/README.md \
Using Docker for connecting Flask Backend to React Frontend.\

First change the env file to your appropriate API key.\
To run the application, cmd: docker-compose up -d\
To add mock users to sqlite, cmd: docker-compose run --rm microblog-api bash -c "flask fake users 10 && flask fake posts 100"\
To close docker connection, cmd: docker-compose down
