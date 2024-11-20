import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoadingSpinner from "../components/LoadingSpinner";

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
        <LoadingSpinner />
    );
}
