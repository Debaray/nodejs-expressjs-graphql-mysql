const {buildSchema} = require('graphql');

const postSchema = `
scalar DateTime

type Post {
    id:Int!
    title: String!
    slug: String!
    content: String!
    status: Boolean!
    user: User!
    tags:[Tag!]!
    createAt: DateTime! # will be generated
    updateAt: DateTime! # will be generated
}

extend type Query {

    allpost: [Post]
    fetchPost(id: Int!) : Post

}

extend type mutation {

    addPost(title: String!, content: String!, status: Boolean, tags: [Int!]!): Post
    updatePost(
        id: Int!,
        title: String!,
        content: String!,
        status: Boolean,
        tags: [Int!]!
    ): Post


}
`;

module.exports = postSchema;