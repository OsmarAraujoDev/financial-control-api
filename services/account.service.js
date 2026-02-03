const accountModel = require('../models/account.model');
const logger = require('../utils/logger');

const accountService = {
  async create({ userId, accountTypeId, title, initialBalance }) {
    const account = await accountModel.create({ userId, accountTypeId, title, initialBalance });
    logger.info(`Conta criada: ${title}`);
    return account;
  },

  async list(filters = {}) {
    return await accountModel.findAll(filters);
  },

  async update(accountId, { userId, accountTypeId, title, initialBalance }) {
    const updated = await accountModel.update(accountId, { userId, accountTypeId, title, initialBalance });
    if (!updated) {
      const error = new Error('Conta não encontrada');
      error.statusCode = 404;
      throw error;
    }
    logger.info(`Conta atualizada: ${accountId}`);
    return updated;
  },

  async delete(accountId) {
    const deleted = await accountModel.delete(accountId);
    if (!deleted) {
      const error = new Error('Conta não encontrada');
      error.statusCode = 404;
      throw error;
    }
    logger.info(`Conta deletada: ${accountId}`);
    return deleted;
  }
};

module.exports = accountService;
