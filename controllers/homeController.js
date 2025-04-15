const getFileFromAbsolutePath = require("../utils/getFileFromAbsolutePath");

const getHomeView = (req, res) => {
    res.sendFile(getFileFromAbsolutePath("views", "home"));
}

module.exports = getHomeView;