import mongoose from "mongoose";
import dotenv from "dotenv";
import Todo from "./todo";
dotenv.config();

const { DB_HOST, DB_PORT, DB_NAME, DATABASE_URI } = process.env;
export const url =
  DATABASE_URI ||
  `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, options)
  .then(() => {})
  .catch((err) => {
    throw new Error(err);
  });

export default { Todo };
