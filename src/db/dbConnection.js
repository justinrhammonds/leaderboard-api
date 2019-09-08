import mongoose from "mongoose";
import "dotenv/config";

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DATABASE}/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .catch(error => {
    console.log(error);
  });

const db = mongoose.connection;
db.once("open", () => console.log("Connected to Mongo DB Cluster"));
