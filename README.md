# Flower Delivery API

This is a simple Flower Delivery API built using Node.js, Express, and MongoDB Atlas.  
It allows you to create, get, and delete flower records, along with image uploads handled by Multer.

## Features
- Add new flowers with image uploads (using Multer)
- Get all flowers
- Delete flowers by ID
- MongoDB Atlas database connection
- Error handling and input validation
- CORS and JSON middleware for secure communication
- Organized folder structure

## Technologies Used
- Node.js - Backend runtime
- Express.js - Web framework
- MongoDB Atlas - Cloud database
- Mongoose - ODM for MongoDB
- Multer - File upload middleware
- CORS - Middleware for API access
- Dotenv - Environment variable management
- Postman - API testing

## How To Use
- Clone the repository to your local machine
- Install dependencies (npm install)
- Create a .env file in the project root and inside it should be:
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
- .env file is ignored in gitignore and not pushed to github

## API Endpoints
- GET (Get all flowers) - http://localhost:5000/api/flowers
- POST (Create flower) - http://localhost:5000/api/flowers
- DELETE (Delete flower by id) - http://localhost:5000/api/flowers/:id

## Run Server
node server.js

 ## Live Demo
Checkout the live demo of the project: [Live Demo]()

## Loom Video
Watch video [here]()

## Author
Rabia Isah Yusuf
[Github](https://github.com/risahyusuf)




