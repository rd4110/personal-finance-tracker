const express = require('express');
const { checkToken } = require('../middlewares');

const {
  listTransactions,
  listFilteredTransactions,
  addTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transaction-controller');

const router = express.Router();

router.get('/',checkToken(['USER']), listTransactions);
router.get('/list',checkToken(['USER']), listFilteredTransactions);
router.post('/',checkToken(['USER']), addTransaction);
// router.get('/:id', getTransactionById);
router.put('/update/:id',checkToken(['USER']), updateTransaction);
router.delete('/delete/:id',checkToken(['USER']), deleteTransaction);

module.exports = router;
