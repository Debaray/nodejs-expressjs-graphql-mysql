const {buildSchema} = require('graphql');

const userSchema = `
scalar DateTime

type User {
    id: Int!
    firstName: String!
    lastName: String
    email: String!
    posts: [Post]
    createAt: DateTime! # will be generated
    updateAt: DateTime! #will be generated
    
}
extend type Query {

    allUsers:[User]
    fetchUser(id: Int!): User
     
}
extend type mutation {

    login(email: String!, password: String!): String
    createUser(firstName: String!,lastName: String, email: String!, password: String!): User
    updateUser(id: Int!,
        firstName: String!,
        lastName: String,
        email: String!,
        password: String!
        ): User
}
`;
module.exports = userSchema;