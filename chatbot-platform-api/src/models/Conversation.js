const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Conversation = sequelize.define('Conversation', {
  // Add fields related to conversation if needed
});

module.exports = Conversation;
Conversation.belongsTo(Chatbot);
Conversation.belongsTo(EndUser);
