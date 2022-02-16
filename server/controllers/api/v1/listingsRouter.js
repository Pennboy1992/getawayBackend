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
    //hardcoded post
    // const doc = await Listings.create({
    //   address: "Pigeon Forge, Tennessee, United States of America",
    //   price: 500,
    //   img: "https://www.thesmokies.com/wp-content/uploads/2020/02/Featured.jpg",
    //   description: "You won't find may true log cabin homes like this one in the Smokies, particularly one on the side of a beautiful mountain with such nice views! This three-bedroom cabin is loaded with amenities, like an oversized indoor jacuzzi tub, three satellite TVs, a hot tub on the back deck overlooking the valley below, a pool table, rocking chairs to view the distant mountains, a fully stocked kitchen, games and puzzles, and a Weber charcoal grill. Easy access to Pigeon Forge, Gatlinburg and the Smoky Mountain National Park via scenic paved country roads. The cabin is nicely decorated, with family heirlooms, paintings and prints from local artists, and themes for each bedroom -- deer/elk, bears and mountain cabin themes. Everything you could want for a great vacation in the Smokies.",
    //   propertyType: "cabin"
    // });

    //dynamic post
    const doc = await Listings.create(req.body)

    await doc.save((err) => {
      if (err) {
        console.error("ERROR Persisting Listing")
      } else {
        console.log("Saved New Listing!")
      }
    });

    res.status(200).send("Saved Listing!")
  } catch (err) {
    console.log(err)
  }
})

export default listingsRouter;
