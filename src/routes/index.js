const router = require('express').Router();
const authRoutes = require('./auth');

router.use('/auth', authRoutes);

router.get('/health-check', (req, res) => {
    return res.send({ message: 'App running...' });
});

module.exports = router;
