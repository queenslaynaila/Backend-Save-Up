const { Saving } = require('../models');

const createSaving = async (req, res) => {
    try {
        const saving = await Saving.create(req.body);
        return res.status(201).json(saving);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllSavings = async (req, res) => {
    try {
        const savings = await Saving.findAll();
        return res.status(200).json(savings);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getSavingById = async (req, res) => {
    const { id } = req.params;
    try {
        const saving = await Saving.findByPk(id);
        if (!saving) {
            return res.status(404).json({ error: 'Saving not found' });
        }
        return res.status(200).json(saving);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateSaving = async (req, res) => {
    const { id } = req.params;
    try {
        let saving = await Saving.findByPk(id);
        if (!saving) {
            return res.status(404).json({ error: 'Saving not found' });
        }
        saving = await saving.update(req.body);
        return res.status(200).json(saving);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteSaving = async (req, res) => {
    const { id } = req.params;
    try {
        const saving = await Saving.findByPk(id);
        if (!saving) {
            return res.status(404).json({ error: 'Saving not found' });
        }
        await saving.destroy();
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createSaving,
    getAllSavings,
    getSavingById,
    updateSaving,
    deleteSaving
};
