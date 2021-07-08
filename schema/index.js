const {buildSchema} = require('graphql');
const UserSchema = require('./user.schema');
const PostSchema = require('./post.schema');
const TagSchema = require('./tag.schema');
const userSchema = require('./user.schema');

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

module.exports = [baseSchema, userSchema, PostSchema, TagSchema];