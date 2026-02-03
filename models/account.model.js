const db = require('../config/database');

const accountModel = {
  async create({ userId, accountTypeId, title, initialBalance }) {
    const query = `
      INSERT INTO accounts (user_id, account_type_id, title, initial_balance)
      VALUES ($1, $2, $3, $4)
      RETURNING account_id, user_id, account_type_id, title, initial_balance, created_at
    `;
    const values = [userId, accountTypeId, title, initialBalance];
    const { rows } = await db.query(query, values);
    return rows[0];
  },

  async findAll(filters = {}) {
    let query = `
      SELECT account_id, user_id, account_type_id, title, initial_balance, created_at
      FROM accounts
    `;
    const conditions = [];
    const values = [];

    if (filters.account_id) {
      values.push(filters.account_id);
      conditions.push(`account_id = $${values.length}`);
    }
    if (filters.user_id) {
      values.push(filters.user_id);
      conditions.push(`user_id = $${values.length}`);
    }
    if (filters.account_type_id) {
      values.push(filters.account_type_id);
      conditions.push(`account_type_id = $${values.length}`);
    }
    if (filters.title) {
      values.push(`%${filters.title}%`);
      conditions.push(`title ILIKE $${values.length}`);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' ORDER BY created_at DESC';

    const { rows } = await db.query(query, values);
    return rows;
  },

  async update(accountId, { userId, accountTypeId, title, initialBalance }) {
    const query = `
      UPDATE accounts
      SET user_id = $1,
          account_type_id = $2,
          title = $3,
          initial_balance = $4
      WHERE account_id = $5
      RETURNING account_id, user_id, account_type_id, title, inital_balance, created_at
    `;
    const values = [userId, accountTypeId, title, initialBalance, accountId];
    const { rows } = await db.query(query, values);
    return rows[0];
  },

  async delete(accountId) {
    const query = `
      DELETE FROM accounts
      WHERE account_id = $1
      RETURNING account_id
    `;
    const { rows } = await db.query(query, [accountId]);
    return rows[0];
  }
};

module.exports = accountModel;
