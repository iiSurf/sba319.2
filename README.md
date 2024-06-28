# Movie Theater API

- The Movie Theater API is a RESTful API that allows you to manage information about movies, theaters, and users. This RESTful API provides endpoints for creating, retrieving, updating, and deleting data in a MongoDB database. This API can be used for various purposes, including managing movie listings, theater locations, and user accounts.

- To run the server, please type in the Command Line Interface, " npm run dev"

- The URL is http://localhost:<Enter your PORT number here> but if you are using postman then replace localhost with 127.0.0.1

> [!Note]
> For example I will use PORT 3200

# API Endpoints

### Movies
- GET / movies

- Retrieves a list of movies.
- GET http://localhost:3200/movies
- GET / movies

- Retrieves a single movie by its ID.
- GET http://localhost:3200/movies/
- POST / movies

- Creates a new movie.
- POST http://localhost:3200/movies
- Body:
- json
- Copy code
``` {
    "title": "Inception",
    "year": 2010,
    "runtime": 148
} ```
- PUT / movies

- Updates a movie by its ID.
- PUT http://localhost:3200/movies/<movie_id>
- Body:
- json
- Copy code
``` {
    "title": "Inception",
    "year": 2010,
    "runtime": 150
} ```
- DELETE / movies

- Deletes a movie by its ID.
- DELETE http://localhost:3200/movies/<movie_id>
- Theaters
- GET / theaters

- Retrieves a list of theaters.
- GET http://localhost:3200/theaters
- GET / theaters

- Retrieves a single theater by its ID.
- GET http://localhost:3200/theaters/<theater_id>
- POST / theaters

- Creates a new theater.
- POST http://localhost:3200/theaters
- Body:
- json
- Copy code
``` {
    "location": "Downtown",
    "theaterId": 1
``` }
- PUT / theaters

- Updates a theater by its ID.
- PUT http://localhost:3200/theaters/<theater_id>
- Body:
- json
- Copy code
``` {
    "location": "Midtown",
    "theaterId": 1
``` }
- DELETE / theaters

- Deletes a theater by its ID.
- DELETE http://localhost:3200/theaters/<theater_id>
- Users
- GET / users

- Retrieves a list of users.
- GET http://localhost:3200/users
- GET / users

- Retrieves a single user by their ID.
- GET http://localhost:3200/users/<user_id>
- POST / users

- Creates a new user.
- POST http://localhost:3200/users
- Body:
- json
- Copy code
``` {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
} ```
- PUT / users

- Updates a user by their ID.
- PUT http://localhost:3200/users/<user_id>
- Body:
- json
- Copy code
``` {
    "name": "John Smith",
    "email": "john.smith@example.com",
    "password": "newpassword123"
} ```
- DELETE / users

- Deletes a user by their ID.
- DELETE http://localhost:3200/users/<user_id>