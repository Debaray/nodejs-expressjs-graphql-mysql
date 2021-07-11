const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const db= require("./models");
// Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

const schema = require('./schema');

 
// The root provides a resolver function for each API endpoint
const root = require('./resolvers');
// const root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };
 
const app = express();
app.get("/",(req,res) =>{
  res.json({message: "Welcome to the application"})
})

db.sequelize.sync().then(() =>{
  console.log("sync db");
})
console.log(schema);
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);