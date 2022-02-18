import express from "express";
import Rentals from "../../../models/Rentals";

const rentalsRouter = new express.Router();

rentalsRouter.get("/", async (req, res) => {
  try {
    const myRentals = await Rentals.find();
    console.log(myRentals);
    res.status(200).send(myRentals);
  } catch (err) {
    res.status(404).send(err);
  }
});

rentalsRouter.post("/new", async (req, res) => {
  try {
    const doc = await Rentals.create(req.body);
    await doc.save((err) => {
      if (err) {
        console.error("ERROR Persisting Rentals");
      } else {
        console.log("Saved New Rentals!");
      }
    });

    res.status(200).send("Saved Rentals!");
  } catch (err) {
    console.log(err);
  }
});

rentalsRouter.put("/edit", async (req, res) => {
  console.log(req.body);

  try {
    const doc = await Rentals.findOneAndUpdate(
      { _id: req.body.id },
      {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
      },
      { new: true }
    );

    console.log(doc);
    res.status(202).send(doc);
  } catch (err) {
    console.log(err);
  }
});

rentalsRouter.delete("/delete", async (req, res) => {
  console.log(req.body);
  try {
    const doc = await Rentals.findOneAndDelete({ _id: req.body.id });
    console.log(doc);
    res.status(202).send(doc);
  } catch (err) {
    console.log(err);
  }
});
