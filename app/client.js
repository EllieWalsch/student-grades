// database client - connection
// Where we connect Node to Mongo DB using Mongoose

import mongoose from "mongoose";

export default () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/students")
    .then(() => {
      console.info("connected to MongoDB");
    })
    .catch((err) => {
      console.info("error", err.message);
    });
};
