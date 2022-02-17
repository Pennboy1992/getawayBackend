import mongoose from 'mongoose'

const propertySchema = mongoose.Schema({
    propertyType: { type: String, required: true },
    img: { type: String, required: true }
})

const PropertyTypes = mongoose.model("PropertyTypes", propertySchema)

export default PropertyTypes;