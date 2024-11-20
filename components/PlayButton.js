import { useRouter } from 'next/router';

export default function PlayButton({ gameCode }) {
    const router = useRouter();

    const playGame = () => {
        if (gameCode) {
            router.push(`/ingame?gamecode=${gameCode}`);
        }
    };

    return (
        <a className="group relative inline-block focus:outline-none focus:ring" role="button" onClick={playGame}>
            <span
                className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-red-200 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>

            <span
                className="relative inline-block border-2 border-current px-10 py-4 text-lg font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
            >
                Play <span className="ml-2 inline-block align-middle">→</span>
            </span>
        </a>
    );
}
