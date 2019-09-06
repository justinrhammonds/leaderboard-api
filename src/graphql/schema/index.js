import { gql } from "apollo-server-express";

const schema = gql`
  type Query {
    getLeaderboard: [Score]
  }

  type Mutation {
    addScore(total: Int!, player: String!, date: String!): Score
    deleteScore(id: ID!): Score
    updateLeaderboard(total: Int!, player: String!, date: String!): [Score]
  }

  type Score {
    id: ID!
    total: Int!
    player: String!
    date: String!
  }
`;

export default schema;
