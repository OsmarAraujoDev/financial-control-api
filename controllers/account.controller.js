const accountService = require('../services/account.service');

const accountController = {
  async create(req, res) {
    const { userId, accountTypeId, title, initialBalance } = req.body;
    const account = await accountService.create({ userId, accountTypeId, title, initialBalance });
    return res.status(201).json({
      message: 'Conta criada com sucesso',
      account
    });
  },

  async list(req, res) {
    const { account_id, user_id, account_type_id, title } = req.query;
    const filters = {};
    if (account_id) filters.account_id = account_id;
    if (user_id) filters.user_id = user_id;
    if (account_type_id) filters.account_type_id = account_type_id;
    if (title) filters.title = title;
    const accounts = await accountService.list(filters);
    return res.status(200).json(accounts);
  },

  async update(req, res) {
    const { accountId } = req.params;
    const { userId, accountTypeId, title, initialBalance } = req.body;
    const updated = await accountService.update(accountId, { userId, accountTypeId, title, initialBalance });
    return res.status(200).json({
      message: 'Conta atualizada com sucesso',
      account: updated
    });
  },

  async delete(req, res) {
    const { accountId } = req.params;
    await accountService.delete(accountId);
    return res.status(200).json({
      message: 'Conta deletada com sucesso'
    });
  }
};

module.exports = accountController;
