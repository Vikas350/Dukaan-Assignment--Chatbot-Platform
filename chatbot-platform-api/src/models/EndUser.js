const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const EndUser = sequelize.define('EndUser', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  // Other end user fields
});

module.exports = EndUser;
EndUser.hasMany(Conversation);
