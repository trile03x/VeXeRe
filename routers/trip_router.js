const express = require("express");
const { createTrip, readAllTrip, readDetailTrip, updateTrip, deleteTrip } = require("../controllers/trip-controller");
const tripRouter = express.Router();
tripRouter.post("/createTrip", createTrip);
tripRouter.get("/showAllTrip", readAllTrip);
tripRouter.get("/showDetail/:id", readDetailTrip);
tripRouter.delete("/removeTrip/:id", deleteTrip);
tripRouter.put("/updateTrip/:id", updateTrip);
module.exports = {
    tripRouter,
};