import "core-js/stable";
import "regenerator-runtime";
import { ApolloServer } from "apollo-server";
import schema from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import "./db/dbConnection";

const server = new ApolloServer({
  cors: {
    origin: process.env.CORS_WHITELIST,
    credentials: true
  },
  typeDefs: schema,
  resolvers
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
