const { Router } = require('express');
const router = Router();
const productController = require('../controllers/products.controller')

router.get("/all",productController.getAllProducts);

module.exports = router;