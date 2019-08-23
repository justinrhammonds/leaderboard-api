import "core-js/stable";
import "regenerator-runtime";
import { ApolloServer } from "apollo-server";
import schema from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import "./db/dbConnection";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
  // TODO
  // context: ({ req }) => {
  //   // get the auth token from the headers
  //   const token = req.headers.authentication || null;
  //   if (!token) console.error("you must be logged in");
  // }
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
