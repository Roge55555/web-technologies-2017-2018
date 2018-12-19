const router = require('express-promise-router')();
const { validateQuery, validateParams, schemas } = require('../schemas/routeSchemas');
const MoviesController = require('../controllers/movies');

router.route('/movies')
    .get(MoviesController.movies);

router.route('/sort')
    .get(validateQuery(schemas.sortSchema), MoviesController.sort);

router.route('/name/:name')
    .get(validateParams(schemas.nameSchema), MoviesController.findByName);

router.route('/id/:id')
    .get(validateParams(schemas.idSchema), MoviesController.findById);

router.route('/pagination')
    .get(validateQuery(schemas.pagSchema), MoviesController.pagination);

module.exports = router;