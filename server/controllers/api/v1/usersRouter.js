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

usersRouter.post("/findUser", async (req, res) => {
  try {
    const { email } = req.body;
    const myUser = await Users.findOne({ email });
    console.log(myUser);
    res.status(200).send(myUser);
  } catch (err) {
    res.status(404).send(err);
  }
});

usersRouter.post("/new", async (req, res) => {
  console.log(`route hit with: ${req.body}`);
  try {
    const doc = await Users.create(req.body);

    await doc.save((err) => {
      if (err) {
        console.error("ERROR Persisting User");
      } else {
        console.log("Saved New User!");
      }
    });

    res.status(200).send("Saved User!");
  } catch (err) {
    console.log(err);
  }
});

export default usersRouter;
