const router = require('express').Router();
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const { buildSchema } = require('graphql');
const resolvers = require('./resolvers');
const schema = require('./schema');
const controllers = require('./controllers');

router.use(bodyParser.json());
router.use('/', controllers);
router.use(
    '/graphql',
    expressGraphQL({
        schema: buildSchema(schema),
        rootValue: resolvers,
        graphiql: true,
    })
);

module.exports = router;
