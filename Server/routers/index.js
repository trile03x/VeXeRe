const express = require("express");
const { stationRouter } = require("./station_router");
const{userRouter} = require("./user_router");
const {tripRouter} = require("./trip_router");
const rootRouter = express.Router();
rootRouter.use("/station", stationRouter);
rootRouter.use("/users", userRouter);
rootRouter.use("/trip",tripRouter);
module.exports = {
    rootRouter,
}