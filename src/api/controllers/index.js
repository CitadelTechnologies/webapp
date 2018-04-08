const router = require('express').Router();
const users = require('./users');

router.post('/users/connect', users.connect);

module.exports = router;
