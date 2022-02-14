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

export default listingsRouter;
