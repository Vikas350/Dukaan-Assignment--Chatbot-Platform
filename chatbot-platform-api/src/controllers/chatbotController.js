const Chatbot = require('../models/Chatbot');

module.exports = {
  async createChatbot(req, res) {
    try {
      const { userId } = req.params;
      const { name } = req.body;

      const chatbot = await Chatbot.create({ name, UserId: userId });
      res.status(201).json(chatbot);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create chatbot.' });
    }
  },

  async listChatbots(req, res) {
    try {
      const { userId } = req.params;
      const chatbots = await Chatbot.findAll({ where: { UserId: userId } });
      res.status(200).json(chatbots);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve chatbots.' });
    }
  },

  async getChatbot(req, res) {
    try {
      const { chatbotId } = req.params;
      const chatbot = await Chatbot.findByPk(chatbotId);
      
      if (!chatbot) {
        return res.status(404).json({ error: 'Chatbot not found.' });
      }

      res.status(200).json(chatbot);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve chatbot.' });
    }
  },

  async updateChatbot(req, res) {
    try {
      const { chatbotId } = req.params;
      const { name } = req.body;

      const [updated] = await Chatbot.update({ name }, { where: { id: chatbotId } });

      if (!updated) {
        return res.status(404).json({ error: 'Chatbot not found.' });
      }

      res.status(200).json({ message: 'Chatbot updated successfully.' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to update chatbot.' });
    }
  },

  async deleteChatbot(req, res) {
    try {
      const { chatbotId } = req.params;
      const deleted = await Chatbot.destroy({ where: { id: chatbotId } });

      if (!deleted) {
        return res.status(404).json({ error: 'Chatbot not found.' });
      }

      res.status(200).json({ message: 'Chatbot deleted successfully.' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to delete chatbot.' });
    }
  },
};
