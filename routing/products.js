const express = require("express");

const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");
const productsSlice = require("../store/products");
const productController = require("../controllers/productsController");
const productModel = require("../models/Product");

const router = express.Router();

router.get("/", (_request, response) => {
  const allProducts = productController.getProductsView();

  response.render(allProducts, {
    headTitle: "Shop - Products",
    path: "/",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    products: productsSlice.products,
  });
});

router.get("/add", (_request, response) => {
  const addProduct = productController.addNewProduct();

  response.render(addProduct, {
    headTitle: "Shop - Add product",
    path: "/add",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add",
  });
});

router.post("/add", productController.addNewProduct);
/*
router.post("/add", (request, response) => { //TODO
  productsSlice.newestProduct = request.body;
  productsSlice.products.push(request.body);
  response.status(STATUS_CODE.FOUND).redirect("/products/new");
});*/

router.get("/new", (_request, response) => {
  const getNewProduct = productController.getNewProductView();

  response.render(getNewProduct, {
    headTitle: "Shop - New product",
    path: "/new",
    activeLinkPath: "/products/new",
    menuLinks: MENU_LINKS,
    newestProduct: productsSlice.newestProduct,
  });
});

module.exports = router;
