const {gql} = require('apollo-server-express');

module.exports = gql`
scalar DateTime
type User {
    id: Int!
    firstName: String!
    lastName: String
    email: String!
    password: String!
    createdAt: DateTime! # will be generated
    updatedAt: DateTime! #will be generated
    
}

extend type Query {

    allUsers:[User]
    fetchUser(id: Int!): User
     
}
extend type Mutation {


    createUser(firstName: String!,
        lastName: String, 
        email: String!, 
        password: String!): User
    updateUser(id: Int!,
        firstName: String!,
        lastName: String,
        email: String!,
        password: String!
        ): User
    deleteuser(id: Int!):Boolean
}
`;
// login(email: String!, password: String!): String