const express = require('express');
const router = express.Router();
const ChatbotController = require('../controllers/chatbotController');

// Create a new chatbot for a user
router.post('/:userId/chatbots', ChatbotController.createChatbot);

// List all chatbots for a user
router.get('/:userId/chatbots', ChatbotController.listChatbots);

// Retrieve a single chatbot
router.get('/:chatbotId', ChatbotController.getChatbot);

// Update a chatbot
router.put('/:chatbotId', ChatbotController.updateChatbot);

// Delete a chatbot
router.delete('/:chatbotId', ChatbotController.deleteChatbot);

module.exports = router;
