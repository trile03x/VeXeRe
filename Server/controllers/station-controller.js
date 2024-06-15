const { where, Op } = require("sequelize");
const { Station } = require("../models/index")
const createStation = async (req, res) => {
  const { name, address, province } = req.body;
  try {
    const newStation = await Station.create({ name, address, province });
    res.send(newStation);
  } catch (error) {
    res.send(error)
  }
};
const showStation = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const station = await Station.findOne({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          }
        }



      });
      res.send(station);
    }
    else {
      const listStation = await Station.findAll();
      res.send(listStation);
    }
  }
  catch (error) {
    res.send(error);
  }
}
const showDetailStation = async (req, res) => {
  try {
    const { id } = req.params;
    const station = await Station.findOne({
      where: {
        id,
      }
    });
    res.send(station);
  }
  catch (error) {
    res.send(error);
  }
};
const updateStation = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await Station.update(data, {
      where: {
        id,
      }
    });
    res.send("Update");
  }
  catch (error) {
    res.send(error);
  }
};
const deleteStation = async (req, res) => {
  try {
    const { id } = req.params;
    await Station.destroy({
      where: {
        id,
      }
    })
    res.send("Removed");
  } catch (error) {
    res.send(error);
  }
}
module.exports = {
  createStation,
  showStation,
  showDetailStation,
  updateStation,
  deleteStation
}
