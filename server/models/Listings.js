import mongoose from "mongoose";
const { Schema } = mongoose;

//create a mongoose schema
const listingsSchema = mongoose.Schema({
  ownerEmail: { type: String, required: true },
  propertyId: Schema.Types.ObjectId,
  address: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  propertyType: { type: String, required: true },
});

const Listings = mongoose.model("Listings", listingsSchema);

export default Listings;
