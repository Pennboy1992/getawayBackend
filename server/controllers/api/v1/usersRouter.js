import express from "express";
import Users from "../../../models/Users.js";

const usersRouter = new express.Router();

usersRouter.get("/", async (req, res) => {
  try {
    const myUsers = await Users.find();
    console.log(myUsers);
    res.status(200).send(myUsers);
  } catch (err) {
    res.status(404).send(err);
  }
});

export default usersRouter;
