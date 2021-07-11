const {buildSchema} = require('graphql');
const User = require('./user.schema');
const Post = require('./post.schema');
const Tag = require('./tag.schema');

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

module.exports = [baseSchema, User, Post, Tag];