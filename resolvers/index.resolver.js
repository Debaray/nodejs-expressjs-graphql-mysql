const {GraphQLDateTime} = require('graphql-iso-date');
const User = require('./user.resolver');
const Post = require('./post.resolver');
const Tag = require('./tag.resolver');
const customScalarResolver ={
    Date: GraphQLDateTime,
};

module.exports = [customScalarResolver,User,Post,Tag];