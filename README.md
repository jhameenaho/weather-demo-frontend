# WeatherDemo

WeatherDemo is a demo project demonstrating skills in frontend and backend programming.

### General info

These instructions will get you a copy of the project up and running on your local machine. There are separate frontend and backend.

### Prerequisites

*  Node >= 6
*  Java 8

### Installation

##### Frontend

In command line navigate to the respective directory

```
$ cd frontend
```

Install modules

```
$ npm install
```

And you are ready to start the frontend

```
$ npm run start
```

Navigating with a browser to http://localhost:3000/ should bring up the client now.

##### Backend

In command line navigate to the respective directory

```
$ cd backend
```

Now just simply start it

```
$ mvn spring-boot:run
```

Backend should be responding at http://localhost:8080/ after a while.

##### Usage

Without logging in you can just search for weather info.
There are two users: user1//user1 and user2//user2
As a logged in user you can add a queried weather info to favourites, re-query it, and delete it.
Nothing is stored in local storage so refreshing the page loses all data, therefore logging user out.

### State of the assignment / TODO

Strictly speaking of the assignment requirements, backend should cover all of them other than proper tests. Frontend lacks tests completely, is definitely not fancy and doesn't show even a fraction of weather info that backend gives.

Also there could be tons of general improvements to the code, like proper error handling and making frontend properly with components, cleaning up and so on. There was plenty of time to finish this assignment, but my estimate of required time to finish the assignment was way off.

### Built With

* [Spring Boot](https://projects.spring.io/spring-boot/)
* [Create React App](https://github.com/facebookincubator/create-react-app) - React Bootstrapping

### License

This project is licensed under the MIT License.