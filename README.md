# WeatherDemo

WeatherDemo is a demo project demonstrating skills in frontend and backend programming. This is the frontend part, 
the backend can be found [here](https://github.com/jhameenaho/weather-demo-backend).

### General info

These instructions will get you a copy of the project up and running on your local machine. There are separate frontend and backend.

### Prerequisites

*  Node >= 6

### Installation

##### Frontend

In command line navigate to the respective directory:

```
$ cd frontend
```

Install modules:

```
$ npm install
```

And you are ready to start the frontend

```
$ npm run start
```

Navigating with a browser to http://localhost:3000/ should bring up the client now.

##### Usage

Without logging in you can just search for weather info.
There are two users: user1//user1 and user2//user2
As a logged in user you can add a queried weather info to favourites, re-query it, and delete it.
Nothing is stored in local storage so refreshing the page loses all data, therefore logging user out.

### TODO

- Tests
- Fancy UI
- More functionality
- Persistent data

### Built With

* [Create React App](https://github.com/facebookincubator/create-react-app) - React Bootstrapping

### License

This project is licensed under the MIT License.