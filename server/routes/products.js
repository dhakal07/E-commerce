const express = require('express');
const { addProduct, getAllProducts } = require('../controllers/productController');
const router = express.Router();

router.get('/', getAllProducts);
router.post('/', addProduct);

module.exports = router;
