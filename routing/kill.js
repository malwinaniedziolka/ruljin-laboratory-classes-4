const express = require("express");

const logger = require("../utils/logger");
const logoutController = require("../controllers/logoutController");

const router = express.Router();

router.get("/", logoutController.killAplication);

module.exports = router;
