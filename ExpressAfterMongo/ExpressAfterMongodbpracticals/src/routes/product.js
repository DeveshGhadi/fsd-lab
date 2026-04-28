const express = require('express');
const router = express.Router();

const {
    getAllProducts, getProductsById,  createProduct,deleteProduct, updateProduct,patchProduct
} = require('../controllers/productController');

//Routes      /api/products
router.route('/')
    .get(getAllProducts)      //GET      /api/products
    .post(createProduct);     //POST    /api/products

//   /api/products/:id      (here ':' is used to define that id is dynamic in url body)
router.route('./:id')
    .get(getProductsById)
    .put(updateProduct)
    .patch(patchProduct)
    .delete(deleteProduct);

module.exports = router;