const router = require('express').Router();

const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
