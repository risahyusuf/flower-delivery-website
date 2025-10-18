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
    res.status(400).json({ message: error.message });
  }
};

const deleteFlower = async (req, res) => {
  try {
    const deletedFlower = await Flower.findByIdAndDelete(req.params.id);
    if (!deletedFlower) {
      return res.status(404).json({ message: 'Flower not found' });
    }
    res.status(200).json({ message: 'Flower deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllFlowers, createFlower, deleteFlower, };