const { Expense } = require('../models');

const createExpense = async (req, res) => {
    try {
        const expense = await Expense.create(req.body);
        return res.status(201).json(expense);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        return res.status(200).json(expenses);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getExpenseById = async (req, res) => {
    const { id } = req.params;
    try {
        const expense = await Expense.findByPk(id);
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        return res.status(200).json(expense);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateExpense = async (req, res) => {
    const { id } = req.params;
    try {
        let expense = await Expense.findByPk(id);
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        expense = await expense.update(req.body);
        return res.status(200).json(expense);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        const expense = await Expense.findByPk(id);
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        await expense.destroy();
        return res.status(204).json({ message: 'User deleted' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createExpense,
    getAllExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense
};
