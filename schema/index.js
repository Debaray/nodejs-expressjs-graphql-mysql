
const User = require('./user.schema');
const Post = require('./post.schema');
const Tag = require('./tag.schema');

const {gql} = require('apollo-server-express');

baseSchema = gql`
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
`;

module.exports = [baseSchema, User, Post, Tag];