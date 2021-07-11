const {buildSchema} = require('graphql');

module.exports = buildSchema(`
scalar DateTime

type User {
    id: Int!
    firstName: String!
    lastName: String
    email: String!
    post: [Post]
    createAt: DateTime! # will be generated
    updateAt: DateTime! #will be generated
    
}
type Query {

    allUsers:[User]
    fetchUser(id: Int!): User
     
}
type mutation {


    createUser(firstName: String!,lastName: String, email: String!, password: String!): User
    updateUser(id: Int!,
        firstName: String!,
        lastName: String,
        email: String!,
        password: String!
        ): User
}
`);
// login(email: String!, password: String!): String