const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    // quantity: {
    //     type: int,
    //     required: true
    // }
})

module.exports = mongoose.model('Seller', sellerSchema)