const productModel = require("../models/Product");
const { MENU_LINKS } = require("../constants/navigation");
const productsSlice = require("../store/products");

const getProductsView = (req, res) => {
    const allProducts = productModel.getAll();
    res.render("products", {
        headTitle: "Shop - Products",
        path: "/",
        menuLinks: MENU_LINKS,
        activeLinkPath: "/products",
        products: productsSlice.products,
    });
}

const getAddProductView  = (req, res) => {
    res.render('add-product', {
        headTitle: "Shop - Add product",
        path: "/add",
        menuLinks: MENU_LINKS,
        activeLinkPath: "/products/add",
      });
}

const addNewProduct  = (req, res) => {
    const { name, description } = req.body;
    productModel.addNewProduct(name, description);
    res.redirect('/products/new');
}

const getNewProductView  = (req, res) => {
    const getLast = productModel.getLast();
    res.render("new-product", {
        headTitle: "Shop - New product",
        path: "/new",
        activeLinkPath: "/products/new",
        menuLinks: MENU_LINKS,
        newestProduct: productsSlice.newestProduct,
    });
}

const getProductView  = (req, res) => {
    const { name } = req.params;
    const product = productModel.findByName(name);
    res.render("product", { product: product });
}

const deleteProduct  = (req, res) => {
    const { name } = req.params;
    productModel.deleteByName(name);
    res.status(200).json({ success: true });
}

//

module.exports = {
    getProductsView,
    getAddProductView,
    addNewProduct,
    getNewProductView,
    getProductView,
    deleteProduct
}