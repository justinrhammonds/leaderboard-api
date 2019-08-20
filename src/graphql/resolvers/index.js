import Score from "../../db/dbModels";

const resolvers = {
  Query: {
    async getLeaderboard() {
      return await Score.find().exec();
    }
  },
  Mutation: {
    async addScore(root, { total, player, date }) {
      const score = new Score({
        total,
        player,
        date: new Date(date)
      });
      const response = await Score.create(score);
      return response;
    },
    async deleteScore(root, { id }) {
      return await Score.findOneAndRemove(id);
    }
  }
};

export default resolvers;
