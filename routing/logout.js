const express = require("express");

const { LOGOUT_LINKS } = require("../constants/navigation");
const logoutController = require("../controllers/logoutController");

const router = express.Router();

router.get("/", (_request, response) => {
  const logoutview = logoutController.getLogoutView();

  response.render(logoutview, {
    headTitle: "Shop - Logout",
    path: "/logout",
    activeLinkPath: "/logout",
    menuLinks: LOGOUT_LINKS,
  });
});

module.exports = router;
