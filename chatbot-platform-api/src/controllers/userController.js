const User = require('../models/User');

module.exports = {
  async createUser(req, res) {
    try {
      const { username } = req.body;
      const user = await User.create({ username });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create user.' });
    }
  },
  // Other controller methods
  async listUsers(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve users.' });
    }
  },

  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve user.' });
    }
  },

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { username } = req.body;

      const [updated] = await User.update({ username }, { where: { id } });

      if (!updated) {
        return res.status(404).json({ error: 'User not found.' });
      }

      res.status(200).json({ message: 'User updated successfully.' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to update user.' });
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deleted = await User.destroy({ where: { id } });

      if (!deleted) {
        return res.status(404).json({ error: 'User not found.' });
      }

      res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to delete user.' });
    }
  },
};
