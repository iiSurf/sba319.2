# Movie Theater API

- The Movie Theater API is a RESTful API that allows you to manage information about movies, theaters, and users. This RESTful API provides endpoints for creating, retrieving, updating, and deleting data in a MongoDB database. This API can be used for various purposes, including managing movie listings, theater locations, and user accounts.

- To run the server, please type in the Command Line Interface, `npm run dev`

- The URL is `http://localhost:<Enter your PORT number here>` but if you are using Postman then replace `localhost` with `127.0.0.1`

> [!Note]
> For example, I will use PORT 3200

# API Endpoints

### Movies

- **GET /movies**
  - Retrieves a list of movies.
  - `GET http://localhost:3200/movies`

- **GET /movies/:id**
  - Retrieves a single movie by its ID.
  - `GET http://localhost:3200/movies/ID HERE`

- **POST /movies**
  - Creates a new movie.
  - `POST http://localhost:3200/movies`
  - **Body:**
    ```json
    {
        "title": "Inception",
        "year": 2010,
        "runtime": 148
    }
    ```

- **PUT /movies/:id**
  - Updates a movie by its ID.
  - `PUT http://localhost:3200/movies/ID HERE`
  - **Body:**
    ```json
    {
        "title": "Inception",
        "year": 2010,
        "runtime": 150
    }
    ```

- **DELETE /movies/:id**
  - Deletes a movie by its ID.
  - `DELETE http://localhost:3200/movies/ID Here`

### Theaters

- **GET /theaters**
  - Retrieves a list of theaters.
  - `GET http://localhost:3200/theaters`

- **GET /theaters/:id**
  - Retrieves a single theater by its ID.
  - `GET http://localhost:3200/theaters/ID Here`

- **POST /theaters**
  - Creates a new theater.
  - `POST http://localhost:3200/theaters`
  - **Body:**
    ```json
    {
        "location": "Downtown",
        "theaterId": 1
    }
    ```

- **PUT /theaters/:id**
  - Updates a theater by its ID.
  - `PUT http://localhost:3200/theaters/ID Here`
  - **Body:**
    ```json
    {
        "location": "Midtown",
        "theaterId": 1
    }
    ```

- **DELETE /theaters/:id**
  - Deletes a theater by its ID.
  - `DELETE http://localhost:3200/theaters/ID Here`

### Users

- **GET /users**
  - Retrieves a list of users.
  - `GET http://localhost:3200/users`

- **GET /users/:id**
  - Retrieves a single user by their ID.
  - `GET http://localhost:3200/users/ID Here`

- **POST /users**
  - Creates a new user.
  - `POST http://localhost:3200/users`
  - **Body:**
    ```json
    {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "password123"
    }
    ```

- **PUT /users/:id**
  - Updates a user by their ID.
  - `PUT http://localhost:3200/users/ID Here`
  - **Body:**
    ```json
    {
        "name": "John Smith",
        "email": "john.smith@example.com",
        "password": "newpassword123"
    }
    ```

- **DELETE /users/:id**
  - Deletes a user by their ID.
  - `DELETE http://localhost:3200/users/ID Here`
