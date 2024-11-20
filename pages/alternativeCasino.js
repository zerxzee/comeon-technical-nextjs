import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import GameCard from "../components/GameCard";
import TabGroup from "../components/TabGroup";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";

export async function getServerSideProps(context) {
    const { search = '', category = '0' } = context.query;

    const categoryResponse = await fetch('http://localhost:3001/api/categories');
    const categories = await categoryResponse.json();

    const gamesResponse = await fetch(`http://localhost:3001/api/games?search=${search}&category=${category}`);
    const initialGames = await gamesResponse.json();

    return {
        props: {
            initialGames,
            categories,
        },
    };
}

export default function AlternativeCasino({ initialGames, categories }) {
    const router = useRouter();
    const { data: session, status } = useSession();
    const { search = '', category = '0' } = router.query;

    const [selectedCategory, setSelectedCategory] = useState(Number(category));
    const [searchQuery, setSearchQuery] = useState(search);
    const [games, setGames] = useState(initialGames);

    if (status === 'loading') {
        return <LoadingSpinner />;
    }

    if (!session) {
        router.push('/login');
    }

    const fetchGames = async (searchQuery, categoryId) => {
        const response = await fetch(`http://localhost:3001/api/games?search=${searchQuery}&category=${categoryId}`);
        const data = await response.json();
        setGames(data);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        fetchGames(e.target.value, selectedCategory);
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        fetchGames(searchQuery, categoryId);
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
                {games.length > 0 ? (
                    games.map((game, index) => (
                        <GameCard key={index} game={game} />
                    ))
                ) : (
                    <p className="font-semibold text-xl text-center">No games found. Try changing your filters to see other games. 🧐</p>
                )}
            </div>
        </div>
    );
}
