const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Flower name is required'],
    },

    description: {
        type: String,
        required: [true, 'Flower description is required'],
    },

    price: {
        type: Number,
        required: [true, 'Flower price is required'],
        min: [0, 'Flower price cannot be negative'],
    },

    category: {
        type: String,
        required: [true, 'Flower category is required']
    },

    image: {
        type: String,
    },

})

const Flower = mongoose.model('Flower', flowerSchema);

module.exports = Flower;