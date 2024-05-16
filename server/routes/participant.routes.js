const Router = require('express').Router;
const participantController = require('../controllers/participant.controller');
const router = Router();

router.get('/participant', participantController.getParticipantsByEvent);
router.post('/participant', participantController.create);

module.exports = router;