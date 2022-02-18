import mongoose from "mongoose";
const { Schema } = mongoose;

const rentalsSchema = mongoose.Schema({
  listingRecord: { type: Schema.Types.Object, ref: "Listings" },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});
const Rentals = mongoose.model("Rentals", rentalsSchema);
export default Rentals;
