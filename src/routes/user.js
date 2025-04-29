const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.findAll);
router.get('/:id', userController.findById);
router.put('/:id', userController.updateById);
router.delete('/:id', userController.deleteById);

module.exports = router;
