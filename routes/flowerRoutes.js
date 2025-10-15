const express = require('express');
const router = express.Router();
const { getAllFlowers, createFlower, deleteFlower } = require('../controllers/flowerControllers');

router.get('/', getAllFlowers);
router.post('/', createFlower);
router.delete('/:id', deleteFlower);

module.exports = router;