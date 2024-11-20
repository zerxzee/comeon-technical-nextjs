const express = require('express');
const { users } = require('../../../mock/mockData');

const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        (user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password
    );

    if (user) {
        const { password, ...userWithoutPassword } = user;
        res.status(200).json(userWithoutPassword);
    } else {
        res.status(401).json({ message: 'Invalid credentials. Please try again.' });
    }
});

loginRouter.all('/', (req, res) => {
    res.status(405).json({ message: 'Method Not Allowed' });
});

module.exports = loginRouter;
