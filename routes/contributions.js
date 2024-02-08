const express = require('express');
const router = express.Router();
const contributionController = require('../sequalize/controllers/contributionsController');

router.post('/', (req, res) => {
    contributionController.createContribution(req, res);
});

router.get('/', (req, res) => {
    contributionController.getAllContributions(req, res);
});

router.get('/:id', (req, res) => {
    contributionController.getContributionById(req, res);
});

router.put('/:id', (req, res) => {
    contributionController.updateContribution(req, res);
});

router.delete('/:id', (req, res) => {
    contributionController.deleteContribution(req, res);
});

module.exports = router;
