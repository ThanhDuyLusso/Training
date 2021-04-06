const express = require("express")
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const Product = require("../models/product")
const Seller = require("../models/seller")
const uploadPath = path.join('public', Product.productImageBasePath)
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif']
const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeTypes.includes(file.mimetype))
    }
})


//All product route
router.get("/", async (req, res) => {
    let query = Product.find()
    if (req.query.name != null && req.query.name != '') {
        query = query.regex('name', new RegExp(req.query.name, 'i'))
    }
    if (req.query.publishedBefore != null && req.query.publishedBefore != '') {
        query = query.lte('publishDate', req.query.publishedBefore)
    }
    if (req.query.publishedAfter != null && req.query.publishedAfter != '') {
        query = query.gte('publishDate', req.query.publishedAfter)
    }
    try {
        const products = await query.exec()
        res.render('products/index', {
            products: products,
            searchOptions: req.query
        })
    }
    catch {
        res.redirect('/')
    }
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
        if (product.productImage != null) {
            removeProductImage(product.productImage)
        }
        renderNewPage(res, product, true)
    }

})

function removeProductImage(fileName) {
    fs.unlink(path.join(uploadPath, fileName), err => {
        if (err) console.err(err)
    })
}

async function renderNewPage(res, product, hasError = false) {
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