const express = require('express');
const { games } = require('../../../mock/mockData');

const gamesRouter = express.Router();

gamesRouter.get('/', (req, res) => {

    // Use the API to search and filter games
    // const { search, category } = req.query;

    // let filteredGames = games;
    // if (category && category !== '0') {
    //     filteredGames = filteredGames.filter((game) =>
    //         game.categoryIds.includes(parseInt(category, 10))
    //     );
    // }

    // if (search) {
    //     filteredGames = filteredGames.filter((game) =>
    //         game.name.toLowerCase().includes(search.toLowerCase())
    //     );
    // }

    // res.status(200).json(filteredGames);

    res.status(200).json(games);
});

gamesRouter.all('/', (req, res) => {
    res.status(405).json({ message: 'Method Not Allowed' });
});

module.exports = gamesRouter;
