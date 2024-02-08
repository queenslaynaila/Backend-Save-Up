const express = require('express');
const router = express.Router();
const expenseController = require('../sequalize/controllers/expensesController');

router.post('/', (req, res) => {
    expenseController.createExpense(req, res);
});

router.get('/', (req, res) => {
    expenseController.getAllExpenses(req, res);
});

router.get('/:id', (req, res) => {
    expenseController.getExpenseById(req, res);
});

router.put('/:id', (req, res) => {
    expenseController.updateExpense(req, res);
});

router.delete('/:id', (req, res) => {
    expenseController.deleteExpense(req, res);
});

module.exports = router;
