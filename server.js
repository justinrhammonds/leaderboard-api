import cors from "cors";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import "./db/dbConnection";

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

server.applyMiddleware({ app, path: "/graphql" });

app.listen({ port: 4000 }, () => {
  console.log("Apollo Server on http://localhost:4000/graphql");
});
