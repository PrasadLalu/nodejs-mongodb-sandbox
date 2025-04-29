const router = require('express').Router();
const roleController = require('../controllers/roleController');

router.post('/', roleController.create);
router.get('/', roleController.findAll);

module.exports = router;
