import PlayButton from "./PlayButton";

export default function GameCard({ game }) {
    return (
        <div className="rounded-lg bg-comeon-default p-4 lg:px-8 lg:py-16">
            <div className="flex flex-col lg:flex-row items-center gap-4 ">
                <img
                    src={game.icon}
                    alt={game.name}
                    className="w-full lg:w-1/2 object-contain lg:mb-0 mb-4" />

                <div className="content-center text-center lg:text-left">
                    <p className="text-2xl font-semibold text-gray-900 mb-8">{game.name}</p>
                    <p className="mt-0.5 text-gray-700 text-left leading-relaxed">{game.description}</p>
                </div>
            </div>

            <div className="flex justify-end mt-4">
                <PlayButton gameCode={game.code} />
            </div>
        </div>
    );
}
