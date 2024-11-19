const express = require('express');
const { users } = require('../../../mock/mockData');

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        (user) => user.name.toLowerCase() === username.toLowerCase() && user.password === password
    );

    if (user) {
        res.status(200).json({ message: 'Login successful!', user });
    } else {
        res.status(401).json({ message: 'Invalid credentials. Please try again.' });
    }
});

loginRouter.all('/', (req, res) => {
    res.status(405).json({ message: 'Method Not Allowed' });
});

module.exports = loginRouter;
