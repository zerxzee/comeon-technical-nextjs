const express = require('express');
const { users } = require('../../../mock/mockData');

const logoutRouter = express.Router();

logoutRouter.post('/', (req, res) => {
    const { username } = req.body;

    const user = users.find(
        (user) => user.name.toLowerCase() === username.toLowerCase()
    );

    if (user) {
        res.status(200).json({ message: 'Logout successful!', user });
    } else {
        res.status(400).json({ message: 'Username do not match!' });
    }
});

logoutRouter.all('/', (req, res) => {
    res.status(405).json({ message: 'Method Not Allowed' });
});

module.exports = logoutRouter;
