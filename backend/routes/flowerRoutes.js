const express = require('express');
const router = express.Router();
const upload = require('../middleware/flowerUpload')
const { getAllFlowers, createFlower, deleteFlower } = require('../controllers/flowerControllers');

router.post

router.get('/', getAllFlowers);
router.post('/', upload.single9('image'), createFlower);
router.delete('/:id', deleteFlower);

module.exports = router;