import { games } from '../../../mock/mockData.json';

export default function handler(req, res) {
    res.status(200).json(games);
}
