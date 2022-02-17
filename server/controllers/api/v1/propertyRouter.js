import express from "express";
import PropertyTypes from "../../../models/propertyTypes.js";

const propertyRouter = new express.Router()

propertyRouter.get("/", async (req, res) => {
    try {
        const propTypes = await PropertyTypes.find();
        res.status(200).send(propTypes)
    } catch (err) {
        res.status(404).send(err);
    }
})

propertyRouter.post("/new", async (req, res) => {
    try {
        const doc = await PropertyTypes.create(req.body);
        await doc.save((err) => {
            if (err) {
                console.error("ERROR Persisting Listing");
            }
        });

        res.status(200).send("Saved Listing!");
    } catch (err) {
        console.log(err);
    }
})

export default propertyRouter