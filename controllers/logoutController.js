const logger = require('../utils/logger');
const { LOGOUT_LINKS } = require('../constants/navigation');

const getLogoutView = (req, res) => {
	res.render('logout', {
		headTitle: 'Shop - Logout',
		path: '/logout',
		activeLinkPath: '/logout',
		menuLinks: LOGOUT_LINKS,
	});
};

const killAplication = (req, res) => {
	logger.getProcessLog;
	process.exit();
};

module.exports = {
	getLogoutView,
	killAplication,
};
