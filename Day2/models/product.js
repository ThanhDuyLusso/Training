const mongoose = require('mongoose');
const path = require('path')
const productImageBasePath = 'uploads/productImage'

const productSchema = new mongoose.Schema({
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

productSchema.virtual('productImagePath').get(function () {
    if (this.productImage != null) {
        return path.join('/', productImageBasePath, this.productImage)
    }
})



module.exports = mongoose.model('Product', productSchema)
module.exports.productImageBasePath = productImageBasePath