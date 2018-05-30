const axios = require('axios');
const model = require('../model');

exports.createUser = (user) => axios.post('http://citadel_sso/register', {
    username: user.username,
    password: user.password,
}).then(response => response.data)
.then(ssoUser => model.user.create(user))
.catch(error => console.log(error));

exports.findAll = ({ search }) => model.user.search({ search });

exports.findOne = ({ id }) => model.user.findOne({ id });

exports.getUserByAccessToken = ({ accessToken }) => axios.get(`http://citadel_sso/users/${accessToken}`)
    .then(response => response.data)
    .then(ssoUser => model.user.findOneByUsername(ssoUser).then(user => Object.assign({}, ssoUser, user)))
    .catch(error => { return null; });
