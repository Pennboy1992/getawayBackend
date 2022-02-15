import mongoose from "mongoose";
const { Schema } = mongoose;

//create a mongoose schema
// User should be able to have multiple listings and should be able to rent multiple properties
const usersSchema = mongoose.Schema({
  userId: Schema.Types.ObjectId,
  user: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
});

const Users = mongoose.model("Users", usersSchema);

export default Users;
