const { Contribution } = require('../models');

const createContribution = async (req, res) => {
    try {
        const contribution = await Contribution.create(req.body);
        return res.status(201).json(contribution);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllContributions = async (req, res) => {
    try {
        const contributions = await Contribution.findAll();
        return res.status(200).json(contributions);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getContributionById = async (req, res) => {
    const { id } = req.params;
    try {
        const contribution = await Contribution.findByPk(id);
        if (!contribution) {
            return res.status(404).json({ error: 'Contribution not found' });
        }
        return res.status(200).json(contribution);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateContribution = async (req, res) => {
    const { id } = req.params;
    try {
        let contribution = await Contribution.findByPk(id);
        if (!contribution) {
            return res.status(404).json({ error:'Contribution not found'});
        }
        contribution = await contribution.update(req.body);
        return res.status(200).json(contribution);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteContribution = async (req, res) => {
    const { id } = req.params;
    try {
        const contribution = await Contribution.findByPk(id);
        if (!contribution) {
            return res.status(404).json({message:"Contribution not found"});
        }
        await contribution.destroy();
        return res.status(204).json({ message:"Contribution Deleted" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createContribution,
    getAllContributions,
    getContributionById,
    updateContribution,
    deleteContribution
};
