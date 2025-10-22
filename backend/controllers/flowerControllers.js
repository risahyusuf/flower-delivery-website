const Flower = require('../models/flowerModel');

const getAllFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.status(200).json(flowers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createFlower = async (req, res) => {
  const { name, description, price, category } = req.body;

  try {
    const newFlower = new Flower({
      name,
      description,
      price,
      category,
      image: req.file ? req.file.path : null,
    });

    const savedFlower = await newFlower.save();
    res.status(201).json(savedFlower);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ message: messages });
    }
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

const deleteFlower = async (req, res) => {
  try {
    const { id } = req.params;

    // check if the ID is a valid MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid flower ID format' });
    }

    const deletedFlower = await Flower.findByIdAndDelete(id);

    if (!deletedFlower) {
      return res.status(404).json({ message: 'Flower not found' });
    }

    res.status(200).json({ message: 'Flower deleted successfully' });
  } catch (error) {
    console.error('Error deleting flower:', error);
    res.status(500).json({ message: 'An error occurred while deleting the flower' });
  }
};

module.exports = { getAllFlowers, createFlower, deleteFlower, };