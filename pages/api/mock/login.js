import { users } from '../../../mock/mockData';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        const user = users.find(
            (user) => user.name.toLowerCase() === username.toLowerCase() && user.password === password
        );

        if (user) {
            res.status(200).json({ message: 'Login successful!', user });
        } else {
            res.status(401).json({ message: 'Invalid credentials. Please try again.' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
