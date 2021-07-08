const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
 
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
 
// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};
 
const app = express();
app.get("/",(req,res) =>{
  res.json({message: "Welcome to the application"})
})

const db= require("./models");

db.sequelize.sync({force : true}).then(() =>{
  console.log("Drop and re-sync db");
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
const port = process.env.PORT || 4000;
app.listen(port);
console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);