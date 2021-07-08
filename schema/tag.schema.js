const {buildSchema} = require('graphql');

const tagSchema = `

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

}

type mutation { 

}`;
module.exports = tagSchema;