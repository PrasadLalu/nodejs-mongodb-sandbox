const router = require('express').Router();
const authRoutes = require('./auth');
const roleRoutes = require('./role');
const userRoutes = require('./user');

router.use('/auth', authRoutes);
router.use('/role', roleRoutes);
router.use('/user', userRoutes);

router.get('/health-check', (req, res) => {
    return res.send({ message: 'App running...' });
});

module.exports = router;
