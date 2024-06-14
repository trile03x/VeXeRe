'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Trip}) {
      // define association here
      this.hasMany(Trip,{foreignKey:'fromStation',as : "from"});
      this.hasMany(Trip,{foreignKey:'toStation',as : "to"});
    }
  }
  Station.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        check(value){
          if(value.length<=2){
             throw new Error("Do dai phai lon hon 2");
          }
          else{
            return true;
          }
        }
      }
    },
    address: DataTypes.STRING,
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};