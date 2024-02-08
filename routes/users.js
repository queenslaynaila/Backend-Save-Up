const express = require('express');
const router = express.Router();
const usersController = require('../sequalize/controllers/usersController');

router.post('/', (req, res) => {
    usersController.createUser(req, res);
});

router.get('/', (req, res) => {
    usersController.getAllUsers(req, res);
});


router.get('/:id', (req, res) => {
    usersController.getUserById(req, res);
});

router.patch('/:id', (req, res) => {
    usersController.updateUser(req, res);
});

router.delete('/:id', (req, res) => {
    usersController.deleteUser(req, res);
});

module.exports = router;
