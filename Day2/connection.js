const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:160898@shop.uzruo.mongodb.net/Shop?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});


const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/sellers')

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))


app.use("/", indexRouter)
app.use("/sellers", authorRouter)

app.listen(process.env.PORT || 3000)