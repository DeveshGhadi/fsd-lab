const Product = require('../models/product');

//getAllProducts
const getAllProducts = async (req, res, next) => {
    try {
        const { category, minPrice, maxPrice } = req.query;
        const filter = {};

        if (category) filter.category = category;

        if (minPrice) filter.price = { $gte: Number(minPrice) };

        if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };

        const products = (await Product.find(filter)).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    }
    catch (error) {
        next(error); //Pass to centralised ErrorHandler;
    }

}

//getProductsById /api/products/:id

const getProductsById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            const error = new Error("Product Not Found");
            error.statusCode = 404;
            return next(error);
        }
        res.status(200).json({
            success: true,
            data: product
        });
    }
    catch (error) {
        next(error);
    }
}

//createProduct --------- POST /api/products


const createProduct = async (req, res, next) => {
    try {
        const Product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            data: product
        });
    }
    catch (error) {
        if (error.name === 'Validation Error') {
            error.statusCode = 400;
        }
        next(error);
    }
}

//deleteProduct
const deleteProduct = async(req, res, next) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);

        if(!product){
            const error = new Error('Product not found');
            error.statusCode = 404;
            return next(error);
        }

        res.status(200).json({
            success:true,
            message: "Product deleted successfully!!"
        });
    }
    catch(error){
        next(error);
    }
}

//put -> update product
const updateProduct = async(req, res, next) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true, overwrite: true});

        if(!product){
            const error = new Error('Product not found');
            error.statusCode = 404;
            return next(error);
        }

        res.status(200).json({
            success:true,
            message: "Product Updated successfully!!"
        });
    }
    catch(error){
        next(error);
    }
}

//patch -> Partially Update the product
const patchProduct = async(req,res,next)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true, runValidators:true});
      if(!product){
            const error = new Error('Product not found');
            error.statusCode = 404;
            return next(error);
        }

        res.status(200).json({
            success:true,
            message: "Product Patched successfully!!"
        });
    }
    catch(error){
        next(error);
    }
}

module.exports = { getAllProducts, getProductsById, createProduct,deleteProduct, updateProduct,patchProduct }