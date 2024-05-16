const Router = require('express').Router;
const eventController = require('../controllers/event.controller');
const router = Router();

router.get('/event', eventController.get);
router.get('/event/:id', eventController.getOne);
router.post('/event', eventController.create);

module.exports = router;