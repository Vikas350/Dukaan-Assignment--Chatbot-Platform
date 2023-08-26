const EndUser = require('../models/EndUser');

module.exports = {
  async registerEndUser(req, res) {
    try {
      const { name, email } = req.body;
      const endUser = await EndUser.create({ name, email });
      res.status(201).json(endUser);
    } catch (error) {
      res.status(400).json({ error: 'Failed to register end user.' });
    }
  },

  async listEndUsers(req, res) {
    try {
      const endUsers = await EndUser.findAll();
      res.status(200).json(endUsers);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve end users.' });
    }
  },

  async getEndUser(req, res) {
    try {
      const { endUserId } = req.params;
      const endUser = await EndUser.findByPk(endUserId);

      if (!endUser) {
        return res.status(404).json({ error: 'End user not found.' });
      }

      res.status(200).json(endUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve end user.' });
    }
  },

  async updateEndUser(req, res) {
    try {
      const { endUserId } = req.params;
      const { name, email } = req.body;

      const [updated] = await EndUser.update({ name, email }, { where: { id: endUserId } });

      if (!updated) {
        return res.status(404).json({ error: 'End user not found.' });
      }

      res.status(200).json({ message: 'End user updated successfully.' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to update end user.' });
    }
  },

  async deleteEndUser(req, res) {
    try {
      const { endUserId } = req.params;
      const deleted = await EndUser.destroy({ where: { id: endUserId } });

      if (!deleted) {
        return res.status(404).json({ error: 'End user not found.' });
      }

      res.status(200).json({ message: 'End user deleted successfully.' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to delete end user.' });
    }
  },
};
