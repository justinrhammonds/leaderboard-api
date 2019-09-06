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
        date: new Date(parseInt(date))
      });
      const response = await Score.create(score);
      return response;
    },
    async deleteScore(root, { id }) {
      return await Score.findOneAndRemove({ _id: id });
    },
    async updateLeaderboard(root, { total, player, date }) {
      const score = new Score({
        total,
        player,
        date: new Date(parseInt(date))
      });

      await Score.create(score);
      let scores = await Score.find().exec();
      scores.sort((a, b) => {
        return b.total - a.total;
      });

      if (scores.length > 20) {
        const idsToDelete = scores.slice(20).map(e => e.id);
        await Score.deleteMany({ _id: { $in: idsToDelete } }, function(err) {
          console.error(err);
        });
      }

      return await Score.find().exec();
    }
  }
};

export default resolvers;
