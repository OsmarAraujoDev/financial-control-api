const express = require('express');
const accountController = require('../controllers/account.controller');
const validate = require('../middlewares/validate');
const {
  createAccountSchema,
  updateAccountSchema,
  listAccountFiltersSchema
} = require('../validations/account.validation');

const router = express.Router();

router.post('/', validate(createAccountSchema), accountController.create);
router.get('/', validate(listAccountFiltersSchema, 'query'), accountController.list);
router.put('/:accountId', validate(updateAccountSchema), accountController.update);
router.delete('/:accountId', accountController.delete);

module.exports = router;
