const path = require("path");
const fs = require("fs");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs: fs
    .readFileSync(path.join(__dirname, "../schema.graphql"))
    .toString(),
  // mocks: true,
  resolvers: resolvers,
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
