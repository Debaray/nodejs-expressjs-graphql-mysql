const {gql} = require('apollo-server-express');

module.exports = gql`

type Post {
    id:Int!
    title: String!
    content: String!
    status: Boolean!
    createdAt: DateTime! # will be generated
    updatedAt: DateTime! # will be generated
}

extend type Query {

    allPosts: [Post]
    fetchPost(id: Int!) : Post

}

extend type Mutation {

    addPost(title: String!, content: String!, status: Boolean): Post
    updatePost(
        id: Int!,
        title: String!,
        content: String!,
        status: Boolean,
    ): Post
    deletePost(
        id: Int!
    ):Boolean
}
`;