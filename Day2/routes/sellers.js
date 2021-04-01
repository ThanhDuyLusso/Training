const express = require("express")
const router = express.Router()
const Seller = require("../models/seller")


//All Seller route
router.get("/", async (req, res) => {
    let searchOptions = {}
    if (req.query != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const sellers = await Seller.find(searchOptions)
        res.render("sellers/index", {
            sellers: sellers,
            searchOptions: req.query
        })
    }
    catch {
        res.redirect('/')
    }

})


//New Seller Route
router.get("/new", (req, res) => {
    res.render("sellers/new", { seller: new Seller() })
})

//Create Seller Route
router.post("/", async (req, res) => {
    const seller = new Seller({
        name: req.body.name
    })
    try {
        const newSeller = await seller.save()
        // res.redirect('sellers/${newAuthor.id}')
        res.redirect('sellers')
    }
    catch
    {
        res.render('sellers/new', {
            seller: seller,
            errorMessage: "Error creating seller"
        })
    }

})

module.exports = router