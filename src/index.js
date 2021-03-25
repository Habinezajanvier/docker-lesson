import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/v1/todos", router);

app.use("*", (req, res) => {
  return res.status(200).send({ message: "Welcome to my API" });
});

const port = process.env.PORT;

app.listen(port, () => console.log(`App is up and running on ${port}`));
