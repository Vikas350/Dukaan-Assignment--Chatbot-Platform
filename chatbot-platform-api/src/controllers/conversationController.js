const Conversation = require('../models/Conversation');
const Chatbot = require('../models/Chatbot');
const EndUser = require('../models/EndUser');

module.exports = {
  async startConversation(req, res) {
    try {
      const { chatbotId } = req.params;
      const { endUserId } = req.body;

      const chatbot = await Chatbot.findByPk(chatbotId);

      if (!chatbot) {
        return res.status(404).json({ error: 'Chatbot not found.' });
      }

      const endUser = await EndUser.findByPk(endUserId);

      if (!endUser) {
        return res.status(404).json({ error: 'End user not found.' });
      }

      const conversation = await Conversation.create({
        ChatbotId: chatbotId,
        EndUserId: endUserId,
      });

      res.status(201).json(conversation);
    } catch (error) {
      res.status(400).json({ error: 'Failed to start conversation.' });
    }
  },

  // Other conversation controller methods...
  async listConversations(req, res) {
    try {
      const { chatbotId } = req.params;
      const conversations = await Conversation.findAll({ where: { ChatbotId: chatbotId } });
      res.status(200).json(conversations);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve conversations.' });
    }
  },

  async getConversation(req, res) {
    try {
      const { conversationId } = req.params;
      const conversation = await Conversation.findByPk(conversationId);

      if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found.' });
      }

      res.status(200).json(conversation);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve conversation.' });
    }
  },

  async updateConversation(req, res) {
    try {
      const { conversationId } = req.params;
      // Update conversation details here
      // For example, marking it as completed

      res.status(200).json({ message: 'Conversation updated successfully.' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to update conversation.' });
    }
  },

  async endConversation(req, res) {
    try {
      const { conversationId } = req.params;
      const deleted = await Conversation.destroy({ where: { id: conversationId } });

      if (!deleted) {
        return res.status(404).json({ error: 'Conversation not found.' });
      }

      res.status(200).json({ message: 'Conversation ended successfully.' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to end conversation.' });
    }
  },
};
