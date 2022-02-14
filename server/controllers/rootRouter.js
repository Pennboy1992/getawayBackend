import express from "express";
import listingsRouter from "./api/v1/listingsRouter.js";

//create our MAIN router that will house all of our api routes
const rootRouter = new express.Router();

rootRouter.use("/api/v1/listings", listingsRouter);

export default rootRouter;
