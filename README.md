# Social Network API

This project is a social network API built using Express.js, Mongoose, and MongoDB. The API allows users to create, update, and delete users and thoughts, add and remove friends, and manage reactions to thoughts.

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[Demo](#demo)
[API Routes](#api-routes)
[Models](#models)
[Seeding the Database](#seeding-the-database)
[Technologies Used](#technologies-used)
[License](#license)


## Installation

#### Clone the repository:
```sh
git clone https://github.com/surpritam/social-network-api.git
```
#### Change into the project directory:
```sh
cd social-network-api
```
#### Install dependencies:
```sh
npm install
```
#### Start your service
Make sure MongoDB is running on your local machine or configure your MongoDB URI in a .env file.
```sh
npm start
```
The server should be running on http://localhost:3001.

## Usage

Once the server is running, you can interact with the API using tools like Insomnia or Postman.

## Demo
 - [API GET routes in Insomnia for users and thoughts](https://drive.google.com/file/d/1jcretxVGb4oFW1boms5lAvyuXhlF7iEI/view?usp=sharing)
 - [API POST PUT DELETE routes in Insomnia for user](https://drive.google.com/file/d/1IIpBD2hDvtSKJi8Y3nyZW5zIdojs3ouT/view?usp=sharing)
 - [API POST PUT DELETE routes in Insomnia for thoughts](https://drive.google.com/file/d/1yOuEaH9w5mOnDJGkLFNEKrycNg3MJ7gk/view?usp=sharing)
 - [API POST DELETE routes in Insomnia for thoughts rections](https://drive.google.com/file/d/12bC0Gv9jTs02Lr4No_AJGnXU5h-PAYza/view?usp=sharing)
 - [API POST DELETE routes in Insomnia for user friends](https://drive.google.com/file/d/1cXo9Aw2B3QC3ktOtIt0mTN7oQQYkVUDh/view?usp=sharing)

## API Routes

**Users** 
* GET /api/users - Retrieves all users.
* GET /api/users/:userId - Retrieves a single user by their _id, with populated thought and friend data.
* POST /api/users - Creates a new user.
    Example request body:
    ```json
    {
    "username": "blissfullPanda",
    "email": "bliss@test.com"
    }
    ```
* PUT /api/users/:userId - Updates a user by their _id.
* DELETE /api/users/:userId - Deletes a user by their _id, including their associated thoughts.

**Friends**
* POST /api/users/:userId/friends/:friendId - Adds a friend to a user's friend list. The friendId is the _id of another user.
* DELETE /api/users/:userId/friends/:friendId - Removes a friend from a user's friend list.

**Thoughts**
* GET /api/thoughts - Retrieves all thoughts.
* GET /api/thoughts/:thoughtId - Retrieves a single thought by its _id.
* POST /api/thoughts - Creates a new thought and associates it with a user.
    Example request body:
    ```json
    {
    "thoughtText": "this is a new thought",
    "username": "coder123",
    "userId": "66c54bcb98a75123fa4e4f37"
    }
    ```
* PUT /api/thoughts/:thoughtId - Updates a thought by its _id.
* DELETE /api/thoughts/:thoughtId - Deletes a thought by its _id.

**Reactions**
* POST /api/thoughts/:thoughtId/reactions - Adds a reaction to a thought.
    Example request body:
    ```json
    {
    "reactionBody": "Nice thought!",
    "username": "techguy"
    }
    ```
* DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Removes a reaction from a thought by its reactionId.

## Models

**User**
>username: String, unique, required, trimmed.
email: String, required, unique, must match a valid email address.
thoughts: Array of _id values referencing the Thought model.
friends: Array of _id values referencing the User model (self-reference).
Virtuals:friendCount: Retrieves the length of the user's friends array field.

**Thought**
>thoughtText: String, required, must be between 1 and 280 characters.
createdAt: Date, default value is the current timestamp, formatted using dayjs.
username: The user that created this thought.
reactions: Array of nested documents created with the reactionSchema.
Virtuals:
reactionCount: Retrieves the length of the thought's reactions array field.

**Reaction**
This is a schema only, used as a subdocument in the Thought model.

>reactionId: Uses Mongoose's ObjectId data type, default value is a new ObjectId.
reactionBody: String, required, 280 character maximum.
username: String, required.
createdAt: Date, default value is the current timestamp, formatted using dayjs.

## Seeding the Database

To seed the database with sample data:

Ensure MongoDB is running.
Run the seed script:
```sh
npm run seed
```
This will clear the existing data in the database and populate it with new sample users, thoughts, reactions, and friend relationships.

## Technologies Used

Express.js
MongoDB
Mongoose
Node.js
dayjs

## License
This project is licensed under the MIT License.
