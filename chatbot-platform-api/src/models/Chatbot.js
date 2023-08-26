const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Chatbot = sequelize.define('Chatbot', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Other chatbot fields
});

module.exports = Chatbot;
Chatbot.belongsTo(User);
Chatbot.hasMany(Conversation);
