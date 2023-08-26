const express = require('express');
const router = express.Router();
const EndUserController = require('../controllers/endUserController');

// Register a new end user
router.post('/', EndUserController.registerEndUser);

// List all end users
router.get('/', EndUserController.listEndUsers);

// Retrieve details of a single end user
router.get('/:endUserId', EndUserController.getEndUser);

// Update end user details
router.put('/:endUserId', EndUserController.updateEndUser);

// Delete an end user
router.delete('/:endUserId', EndUserController.deleteEndUser);

module.exports = router;
