// Import required modules 
const express = require('express'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const cors = require('cors'); 
const flowerRoutes = require('./routes/flowerRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config(); 
console.log('JWT Secret:', process.env.JWT_SECRET);
// Express app 
const app = express(); 
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors()); 
app.use(express.json()); 

app.use('/uploads', express.static('uploads'));

app.use('/api/flowers', flowerRoutes);
app.use('/api/users', userRoutes);

// Connect to MongoDB using Mongoose 
mongoose.connect(process.env.MONGODB_URI) 
.then(() => { console.log('Connected to MongoDB Atlas');
 

 app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); });
}) 
.catch((err) => console.error('MongoDB connection error:', err)); 
