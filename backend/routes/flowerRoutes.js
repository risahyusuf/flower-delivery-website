const express = require('express');
const router = express.Router();
const upload = require('../middleware/flowerUpload')
const { getAllFlowers, createFlower, deleteFlower } = require('../controllers/flowerControllers');

router.get('/', getAllFlowers);
router.post('/', upload.single('image'), createFlower);
router.delete('/:id', deleteFlower);

module.exports = router;