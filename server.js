// Import required modules 
const express = require('express'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const cors = require('cors'); 

dotenv.config(); 

// Initialize the Express app 
const app = express(); 

// Middleware to parse JSON 
app.use(cors()); 
app.use(express.json()); 

// Connect to MongoDB using Mongoose 
mongoose.connect(process.env.MONGODB_URI) 
.then(() => console.log('Connected to MongoDB Atlas')) 
.catch((err) => console.error('MongoDB connection error:', err)); 

// Define a test route 
app.get('/', (req, res) => { 
    res.send('MongoDB Atlas connected with Mongoose!'); 
}); 

// Start the server
 app.listen(process.env.PORT, () => { 
    console.log('Server is running on port ${PORT}'); });