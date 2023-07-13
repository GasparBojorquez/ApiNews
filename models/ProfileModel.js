const { DataTypes } = require('sequelize');
const { connection } = require("../config.db");


const Profile = connection.define('profile', {
  nombre: {
    type: DataTypes.STRING,
    allownull: false
  },
})

module.exports = { Profile };