const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        maxLength: [100, "Name cannot exceed 50 characters"]
    },
    description: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        require: [true, "Price is required"],
        min: [0, "Price cannot be negative"]
    },
    category: {
        type: String,
        enum: ['electronics', 'clothing', 'food', 'others'],
        default: 'others',

    },
    stock: {
        type: Number,
        default: 0,
        min: 0,
    },
    isActive: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);