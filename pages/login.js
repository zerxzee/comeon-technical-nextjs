import LoginForm from "../components/LoginForm";
import { useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';

export default function Login() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session) {
            router.push('/casino');
        }
    }, [session, router]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <LoginForm />
        </div>
    );
}
