const router = require('express').Router();
const user = require('./user');

router.post('/users/connect', user.connect);

module.exports = router;
