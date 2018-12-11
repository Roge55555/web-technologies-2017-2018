const router = require('express').Router();
const Controllers = require('../controllers/controllers');
const { validateQuery, schemas } = require('../schemas/schemas');
const constants = require('../constants/constants');

router.route(constants.ADMIN_PAGE)
    .get(Controllers.admin);
router.route(constants.REG_PAGE)
    .get(validateQuery(schemas.regSchema), Controllers.reg);
router.route(constants.AUTH_PAGE)
    .get(validateQuery(schemas.authSchema), Controllers.auth);
router.route(constants.HOME_PAGE)
	.get(Controllers.login);
router.route(constants.SAVE_PAGE)
    .get(validateQuery(schemas.saveSchema), Controllers.save);
router.route(constants.DELETE_PAGE)
	.get(validateQuery(schemas.deleteSchema), Controllers.delete);

module.exports = router;