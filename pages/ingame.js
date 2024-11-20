import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function InGame() {
    const router = useRouter();
    const { gamecode } = router.query;
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session) {
        router.push('/login');
    }

    const backToCasino = () => {
        router.push('/casino');
    };

    useEffect(() => {
        if (gamecode) {
            comeon.game.launch(gamecode);
        }
    }, [gamecode]);


    return (
        <div className="justify-center relative">
            <div className="ml-4 md:ml-8">
                <button class="flex items-center text-black px-4 py-2 rounded-full hover:bg-[#ccf7cc] focus:outline-none focus:ring-2 focus:ring-[#ccf7cc] font-semibold mt-4 md:mt-8"
                    onClick={backToCasino}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Back
                </button>
            </div>
            <div id="game-launch" className="relative w-full pb-[75%] h-0">
            </div>
        </div>
    );
}
