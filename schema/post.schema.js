const {buildSchema} = require('graphql');

module.exports = buildSchema(`
scalar DateTime

type Post {
    id:Int!
    title: String!
    slug: String!
    content: String!
    status: Boolean!
    tags:[Tag!]!
    createAt: DateTime! # will be generated
    updateAt: DateTime! # will be generated
}

type Query {

    allpost: [Post]
    fetchPost(id: Int!) : Post

}

type mutation {

    addPost(title: String!, content: String!, status: Boolean, tags: [Int!]!): Post
    updatePost(
        id: Int!,
        title: String!,
        content: String!,
        status: Boolean,
        tags: [Int!]!
    ): Post
    deletePost(
        id: Int!
    ):Boolean
}
`);