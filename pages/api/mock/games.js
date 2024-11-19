const { games } = require('../../../mock/mockData');

const gamesRouter = express.Router();

gamesRouter.get('/', (req, res) => {
    res.status(200).json(games);
});

gamesRouter.all('/', (req, res) => {
    res.status(405).json({ message: 'Method Not Allowed' });
});

module.exports = gamesRouter;
