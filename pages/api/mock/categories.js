const { categories } = require('../../../mock/mockData');

const categoriesRouter = express.Router();

categoriesRouter.get('/', (req, res) => {
    res.status(200).json(categories);
});

categoriesRouter.all('/', (req, res) => {
    res.status(405).json({ message: 'Method Not Allowed' });
});

module.exports = categoriesRouter;
