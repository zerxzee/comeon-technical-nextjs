import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import GameCard from "../components/GameCard";
import TabGroup from "../components/TabGroup";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";

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

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(0);

    if (status === 'loading') {
        return <LoadingSpinner />;
    }

    if (!session) {
        router.push('/login');
    }

    const filteredGames = games.filter((game) => {
        const matchesSearchQuery = game.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === null || game.categoryIds.includes(selectedCategory);
        return matchesSearchQuery && matchesCategory;
    });

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    return (
        <div className="p-12">
            <div className="mb-4 md:mb-12 flex justify-end">
                <SearchBar placeholder="Search game" onSearch={handleSearchChange} />
            </div>
            <TabGroup
                items={categories}
                tabGroupName="categories"
                selectedTab={selectedCategory}
                onTabChange={handleCategoryChange} />
            <div className="grid gap-y-8">
                {filteredGames.length > 0 ? (
                    filteredGames.map((game, index) => (
                        <GameCard key={index} game={game} />
                    ))
                ) : (
                    <p className="font-semibold text-xl text-center">No games found. Try changing your filters to see other games. 🧐</p>
                )}
            </div>
        </div>
    );
}
