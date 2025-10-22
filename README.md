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
- GET (Get all flowers) - https://flower-delivery-website-6n7s.onrender.com/api/flowers
- POST (Create flower) - https://flower-delivery-website-6n7s.onrender.com/api/flowers
- DELETE (Delete flower by id) - https://flower-delivery-website-6n7s.onrender.com/api/flowers/:id

## Run Server
node server.js

 ## Live Demo
Checkout the live demo of the project: [Live Demo](https://flower-delivery-website-6n7s.onrender.com)

## Loom Video
Watch video [here1](https://www.loom.com/share/259380d95af84c81b0ff17517da27f50?sid=8a0d2ac4-66e5-470a-a03b-19aff71a8941) and
[here2](https://www.loom.com/share/0b148b973d764032bea2198e1948349b?sid=313c168f-e83d-491c-b82e-2b7de645a840)


## Author
Rabia Isah Yusuf
Github [risahyusuf](https://github.com/risahyusuf)




