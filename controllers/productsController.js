const getFileFromAbsolutePath = require("../utils/getFileFromAbsolutePath");
//const logger = require("../utils/logger");
const productModel = require("../models/Product");

const getProductsView = (req, res) => {
    const allProducts = productModel.getAll();
    res.render("products", { products: allProducts });
}

const getAddProductView  = (req, res) => {
    res.sendFile(getFileFromAbsolutePath("views", "add-product"));
}

const addNewProduct  = (req, res) => { //TODO BO NWM
  productModel.addNewProduct(name);
  res.redirect('/products/new');
}

const getNewProductView  = (req, res) => {
    const getLast = productModel.getLast();
    res.render("new-product", { product: getLast });
}

const getProductView  = (req, res) => {
    const product = productModel.findByName();
    res.render("product", { product: product });
}

const deleteProduct  = (req, res) => { //TODO
    //usueniecie
    res.status(200).json({ success: true });
}

module.exports = {
    getProductsView,
    getAddProductView,
    addNewProduct,
    getNewProductView,
    getProductView,
    deleteProduct
}