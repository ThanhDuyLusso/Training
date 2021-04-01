const mongoose = require('mongoose');
const productImageBasePath = 'uploads/productImage'

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    productImage: {
        type: String,
        required: true
    },
    prize: {
        type: Number,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Seller"
    },
    detail: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', sellerSchema)
module.exports.productImageBasePath = productImageBasePath