import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'loading') return;
        if (!session) {
            router.push('/login');
        } else {
            router.push('/casino');
        }
    }, [session, status, router]);

    return (
        <div className="flex items-center justify-center h-screen">
            <svg className="animate-spin h-1/4 w-1/4 text-blue-500"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none">
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4">
                </circle>
                <circle
                    className="opacity-75"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeDasharray="80"
                    strokeDashoffset="60"
                    fill="none"
                    strokeLinecap="round">
                </circle>
            </svg>
        </div>
    );
}
