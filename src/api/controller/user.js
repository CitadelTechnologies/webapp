const axios = require('axios');

exports.connect = (req, res) => {
    axios.post('http://citadel_sso/login', {
        service: "2",
        username: req.body.username,
        password: req.body.password,
    }).then(response => res.send(response.data))
    .catch(error => res.status(400).send(error));
};
