import express from "express";
import listingsRouter from "./api/v1/listingsRouter.js";
import propertyRouter from "./api/v1/propertyRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import rentalsRouter from "./api/v1/rentalsRouter.js";

//create our MAIN router that will house all of our api routes
const rootRouter = new express.Router();

rootRouter.use("/api/v1/listings", listingsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/types", propertyRouter);
rootRouter.use("/api/v1/rentals", rentalsRouter);

export default rootRouter;
