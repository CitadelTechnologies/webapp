const axios = require('axios');
const db = require('../repositories');

exports.createUser = (user) => axios.post('http://citadel_sso/register', {
    username: user.username,
    password: user.password,
}).then(response => response.data)
.then(ssoUser => db.users.create(user))
.catch(error => console.log(error));

exports.getUserByAccessToken = ({ accessToken }) => axios.get(`http://citadel_sso/users/${accessToken}`)
    .then(response => response.data)
    .then(ssoUser => db.users.findOneByUsername(ssoUser).then(user => Object.assign({}, ssoUser, user)))
    .catch(error => { return null; });
