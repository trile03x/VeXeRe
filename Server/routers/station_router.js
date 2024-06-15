const express = require("express");
const {Station} = require("../models/index");
const {checkEmty}= require("..//middleware/check");
const {authenticate}= require("../middleware/authenticate");
const {authorize} = require("../middleware/authorize")
const {createStation,showStation,showDetailStation,updateStation,deleteStation} = require("../controllers/station-controller")
const stationRouter = express.Router();
stationRouter.post("/",authenticate,authorize,createStation);
stationRouter.get("/",authenticate,showStation);
stationRouter.get("/:id",authenticate,authorize,checkEmty(Station),showDetailStation);
stationRouter.put("/:id",authenticate,authorize,checkEmty(Station),updateStation);
stationRouter.delete("/:id",authenticate,authorize,checkEmty(Station),deleteStation)
module.exports={
    stationRouter,
}