const getFileFromAbsolutePath = require("../utils/getFileFromAbsolutePath");
const logger = require("../utils/logger");

const getLogoutView = (req, res) => {
    res.sendFile(getFileFromAbsolutePath("views", "logout"));
}

const killAplication  = (req, res) => {
    logger.getProcessLog;
    process.exit();
}

module.exports = {
    getLogoutView,
    killAplication 
}