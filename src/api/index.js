const router = require('express').Router();
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const { buildSchema } = require('graphql');
const resolver = require('./resolver');
const schema = require('./schema');
const controllers = require('./controller');

router.use(bodyParser.json());
router.use('/', controllers);
router.use(
    '/graphql',
    expressGraphQL({
        schema: buildSchema(schema),
        rootValue: resolver,
        graphiql: true,
    })
);

module.exports = router;
