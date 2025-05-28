const express = require('express');

const productController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productController.getProductsView);

router.get('/add', productController.getAddProductView);

router.post('/add', productController.addNewProduct);

router.get('/new', productController.getNewProductView);

router.get('/:name', productController.getProductView);

router.delete('/:name', productController.deleteProduct);

module.exports = router;
