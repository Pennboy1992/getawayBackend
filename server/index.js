import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import rootRouter from "./controllers/rootRouter.js";

//initialize app
const app = express();

//middleware
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(rootRouter);

app.use(cors());

const connectionStg =
  "mongodb+srv://team3:team321@cluster0.rzkvv.mongodb.net/myGetaways?retryWrites=true&w=majority";

const port = process.env.PORT || 8080;

mongoose
  .connect(connectionStg)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
