if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
const bodyParser = require("body-parser")

const indexRouter = require('./routes/index')
const sellerRouter = require('./routes/sellers')
const productRouter = require('./routes/products')

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }))


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:160898@shop.uzruo.mongodb.net/Shop?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

const mongoose = require("mongoose")
const uri = "mongodb+srv://admin:160898@shop.uzruo.mongodb.net/ShopJS?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on("error", error => console.error(error))
db.once("open", () => console.log("Connected to Mongoose"))

app.use("/", indexRouter)
app.use("/sellers", sellerRouter)
app.use("/products", productRouter)

app.listen(process.env.PORT || 3000)

