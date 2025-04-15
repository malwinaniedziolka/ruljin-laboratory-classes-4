const express = require("express");

const { MENU_LINKS } = require("../constants/navigation");
const getHomeView = require("../controllers/homeController");

const router = express.Router();

router.get("/", (_request, response) => {
  response.render(getHomeView, {
    headTitle: "Shop - Home",
    path: "/",
    activeLinkPath: "/",
    menuLinks: MENU_LINKS,
  });
});

module.exports = router;
