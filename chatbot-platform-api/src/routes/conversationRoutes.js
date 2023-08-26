const express = require('express');
const router = express.Router();
const ConversationController = require('../controllers/conversationController');

// Start a new conversation for a chatbot
router.post('/:chatbotId/conversations', ConversationController.startConversation);

// List all conversations for a chatbot
router.get('/:chatbotId/conversations', ConversationController.listConversations);

// Retrieve a single conversation
router.get('/:conversationId', ConversationController.getConversation);

// Update a conversation
router.put('/:conversationId', ConversationController.updateConversation);

// End/delete a conversation
router.delete('/:conversationId', ConversationController.endConversation);

module.exports = router;
