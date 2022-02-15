import express from "express";
import listingsRouter from "./api/v1/listingsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";

//create our MAIN router that will house all of our api routes
const rootRouter = new express.Router();

rootRouter.use("/api/v1/listings", listingsRouter);
rootRouter.use("/api/v1/users", usersRouter);

export default rootRouter;
