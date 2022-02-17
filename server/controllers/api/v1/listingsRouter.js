import express from "express";
import Listings from "../../../models/Listings.js";

//create anoter router that handles all calls to /api/v1/listings
const listingsRouter = new express.Router();

//CRUD handlers go here
listingsRouter.get("/", async (req, res) => {
  try {
    const myListings = await Listings.find();
    console.log(myListings);
    res.status(200).send(myListings);
  } catch (err) {
    res.status(404).send(err);
  }
});

//needs owner information and validation
listingsRouter.post("/new", async (req, res) => {
  try {
    const doc = await Listings.create(req.body);
    await doc.save((err) => {
      if (err) {
        console.error("ERROR Persisting Listing");
      } else {
        console.log("Saved New Listing!");
      }
    });

    res.status(200).send("Saved Listing!");
  } catch (err) {
    console.log(err);
  }
});

listingsRouter.put("/edit", async (req, res) => {
  console.log(req.body);

  try {
    const doc = await Listings.findOneAndUpdate(
      { _id: req.body.id },
      {
        address: req.body.address,
        price: req.body.price,
        description: req.body.description,
        propertyType: req.body.propertyType,
        img: req.body.image,
      },
      { new: true }
    );

    console.log(doc);
    res.status(202).send(doc);
  } catch (err) {
    console.log(err);
  }
});

listingsRouter.delete("/delete", async (req, res) => {
  console.log(req.body);
  try {
    const doc = await Listings.findOneAndDelete({ _id: req.body.id });
    console.log(doc);
    res.status(202).send(doc);
  } catch (err) {
    console.log(err);
  }
});

export default listingsRouter;
