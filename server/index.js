import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"

import rootRouter from "./controllers/rootRouter.js";

dotenv.config()

//initialize app
const app = express();

//middleware
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(rootRouter);

app.use(cors());

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.CONNECTION_STG)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);

      app.get("/", (req, res) => {
        res.send("Welcome to Getaways 2022 API!")
      })

    });
  })
  .catch((err) => {
    console.error(err);
  });
