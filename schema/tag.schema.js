const {buildSchema} = require('graphql');

module.exports = buildSchema(`

scalar DateTime

type  Tag{
    id: Int!
    name: String!
    description: String!
    posts:[Post]
    createdAt: DateTime # will be generated
    updateAt: DateTime  # will be generated
}

type Query {
    allTags: [Tag]
    fetchTag(id: Int!): Tag
}

type mutation { 

    addTag(
        name: String!,
        description: String
    ): Tag
    updateTag (
        id: Int!,
        name: String!,
        description: String
    ): Tag
    deleteTag(
        id: Int!
    ): Boolean

}`);
