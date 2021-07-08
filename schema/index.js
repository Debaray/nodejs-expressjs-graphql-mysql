const {buildSchema} = require('graphql');

const baseSchema = buildSchema(`
scalar Date

type Query {
    _: Boolean
}

type Mutation {
    _: Boolean
}

type Subscription {
    _: Boolean
}
`);

module.exports = {baseSchema};