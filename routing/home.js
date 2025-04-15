const express = require("express");

const { MENU_LINKS } = require("../constants/navigation");
const homeController = require("../controllers/homeController");

const router = express.Router();

router.get("/", (_request, response) => {
  const homeview = homeController.getHomeView();

  response.render(homeview, {
    headTitle: "Shop - Home",
    path: "/",
    activeLinkPath: "/",
    menuLinks: MENU_LINKS,
  });
});

module.exports = router;
