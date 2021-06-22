const express = require('express');
const router = express.Router();

const {
    getAllProducts,
    getProductById,
} = require("../controller/productController");

//@desc GET all products from db
//@route GET /api/product
//@access Public
router.get('/', getAllProducts);

//@desc GET a products by id from db
//@route GET /api/product:id
//@access Public
router.get('/:id', getProductById);

module.exports = router;