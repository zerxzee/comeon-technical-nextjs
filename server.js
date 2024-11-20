const express = require('express');
const bodyParser = require('body-parser');
// INSTALL AND INCLUDE CORS IF SEARCHING/FILTERING GAMES FROM API
// const cors = require('cors');

const loginRouter = require('./pages/api/mock/login');
const logoutRouter = require('./pages/api/mock/logout');
const gamesRouter = require('./pages/api/mock/games');
const categoriesRouter = require('./pages/api/mock/categories');

const app = express();

app.use(bodyParser.json());
// app.use(cors());

app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/games', gamesRouter);
app.use('/api/categories', categoriesRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
