const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./schema');
const resolvers = require('./resolvers');
const db = require("./models");
const http = require('http');

db.sequelize.sync().then(() => {
  console.log("sync db");
})

const app = express();

const server = new ApolloServer({
  introspection: true,
  typeDefs: schema,
  resolvers,
});


server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
const port = process.env.PORT || 4000;
// server.use(
//   '/graphiql',
//   graphiqlExpress({
//     endpointURL: '/graphql',
//   }),
// )

httpServer.listen({ port }, () => {
  console.log(`Server ready at http://localhost:${port}/graphql}`)
});