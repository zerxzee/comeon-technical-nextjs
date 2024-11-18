import { users } from '../../../mock/mockData.json';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        const user = users.find(
            (user) => user.name.toLowerCase() === username.toLowerCase()
        );

        if (user) {
            res.status(200).json({ message: 'Logout successful!', user });
        } else {
            res.status(400).json({ message: 'Username do not match!' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
