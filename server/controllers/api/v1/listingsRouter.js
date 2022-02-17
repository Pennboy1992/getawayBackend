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

listingsRouter.get("/userListings/:email", async (req, res) => {
  try {
    console.log(req.params);
    const { email } = req.params;
    const myListings = await Listings.find({ ownerEmail: email });
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

export default listingsRouter;
