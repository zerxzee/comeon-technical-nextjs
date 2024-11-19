import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import GameCard from '../components/GameCard';
import TabGroup from '../components/TabGroup';

export async function getStaticProps() {
    const gamesResponse = await fetch('http://localhost:3001/api/games', { method: 'get' });
    const games = await gamesResponse.json();
    const categoriesResponse = await fetch('http://localhost:3001/api/categories', { method: 'get' });
    const categories = await categoriesResponse.json();

    return {
        props: {
            games,
            categories
        },
    };
}

export default function Casino({ games, categories }) {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session) {
        router.push('/login');
    }

    return (
        <div className="p-12">
            <TabGroup items={categories} tabGroupName="categories" />
            <div className="grid gap-y-8">
                {games.map((game) => (
                    <GameCard game={game} />
                ))}
            </div>
        </div>

    );
}
