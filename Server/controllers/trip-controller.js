const { where } = require("sequelize");
const { Trip, Station } = require("../models/index")
const createTrip = async (req, res) => {
    const { fromStation, toStation, startTime, price } = req.body;
    try {
        const newTrip = await Trip.create({ fromStation, toStation, startTime, price });
        res.status(201).send(newTrip);
    }
    catch (error) {
        res.send(error);
    }
};
const readAllTrip = async (req, res) => {
    try {
        const tripList = await Trip.findAll({
            include: [
                {
                    model: Station,
                    as: "from",
                },
                {
                    model: Station,
                    as: "to",
                }
            ]
        });
        res.status(200).send(tripList);
    } catch (error) {
        res.send(error);
    }
};
const readDetailTrip = async (req, res) => {
    const { id } = req.params;
    try {
        const triDetail = await Trip.findOne({
            where: {
                id,
            }
        });
        res.status(200).send(triDetail);
    } catch (error) {
        res.send(error);
    }
};
const deleteTrip = async (req, res) => {
    const { id } = req.params;
    try {
        await Trip.destroy({
            where: {
                id,
            }
        });
        res.send('Removed');
    } catch (error) {
        res.send(error);
    }
};
const updateTrip = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const index = await Trip.update(data, { where: { id } });
        if (idnex > -1) {
            res.status(201).send("update success");
        }
    }
    catch (error) {
        res.status(404).send("update fail");
    }

}
module.exports = {
    createTrip,
    readAllTrip,
    readDetailTrip,
    deleteTrip,
    updateTrip,
};