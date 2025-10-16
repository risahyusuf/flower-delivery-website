// Import required modules 
const express = require('express'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const cors = require('cors'); 
const flowerRoutes = require('./routes/flowerRoutes')

dotenv.config(); 

// Initialize the Express app 
const app = express(); 
const PORT = process.env.PORT || 5000;


// Middleware to parse JSON 
app.use(cors()); 
app.use(express.json()); 

app.use('/api/flowers', flowerRoutes);

// Connect to MongoDB using Mongoose 
mongoose.connect(process.env.MONGODB_URI) 
.then(() => { console.log('Connected to MongoDB Atlas');
 

 app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); });
}) 
.catch((err) => console.error('MongoDB connection error:', err)); 
