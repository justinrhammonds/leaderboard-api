import mongoose from "mongoose";
import { Schema } from "mongoose";

const leaderboardSchema = new Schema({
  total: {
    type: Number,
    required: [true, "total is required"]
  },
  player: {
    type: String,
    required: [true, "player is required"]
  },
  date: {
    type: Date,
    required: [true, "date is required"]
  }
});

const Score = mongoose.model("Score", leaderboardSchema, "scores");

export default Score;
