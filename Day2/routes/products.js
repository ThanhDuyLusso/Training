const express = require("express")
const router = express.Router()
const multer = require('multer')
const path = require('path')
const Product = require("../models/product")
const uploadPath = path.join('public', Product.productImageBasePath)
const Seller = require("../models/seller")
const imageMimeTypes = ['images/jpeg', 'images/png', 'images/gif']
const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeTypes.includes(file.mimetype))
    }
})


//All product route
router.get("/", async (req, res) => {
    res.send("All products")
})


//New Product Route
router.get("/new", async (req, res) => {
    renderNewPage(res, new Product())
})

//Create product Route
router.post("/", upload.single('productImage'), async (req, res) => {
    const fileName = req.file != null ? req.file.filename : null
    const product = new Product({
        name: req.body.name,
        seller: req.body.seller,
        publishDate: new Date(req.body.publishDate),
        quantity: req.body.quantity,
        productImage: fileName,
        detail: req.body.detail
    })
    try {
        const newProduct = await product.save()
        // res.redirect('sellers/${newProduct.id}')
        res.redirect('products')
    }
    catch {
        renderNewPage(res, product, true)
    }

})

async function renderNewPage(res, book, hasError = false) {
    try {
        const sellers = await Seller.find({})
        const params = {
            sellers: sellers,
            product: product
        }
        if (hasError) parms.errorMessage = "Error creating product"
        res.render('products/new', params)
    }
    catch {
        res.redirect('/products')
    }
}


module.exports = router