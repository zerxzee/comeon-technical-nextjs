const express = require('express');
const bodyParser = require('body-parser');
const { users } = require('../../../mock/mockData');

const app = express();

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
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

app.all('/api/login', (req, res) => {
    res.status(405).json({ message: 'Method Not Allowed' });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
