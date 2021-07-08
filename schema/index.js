const {buildSchema} = require('graphql');
const {gql} = require('graphql-tag');

const baseSchema = buildSchema(gql,`
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