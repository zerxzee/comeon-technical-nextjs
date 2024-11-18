import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginForm() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = { username, password };

        try {
            const response = await fetch('/api/mock/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (response.ok) {
                setUser(data.user);
                setError('');
                router.push('/casino');
            } else {
                setUser(null);
                setError(data.message);
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    const changeUsername = (value) => {
        setUsername(value);
        setError('');
    }

    const changePassword = (value) => {
        setPassword(value);
        setError('');
    }

    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-neutral-300 w-3/4 drop-shadow-xl">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-16 w-auto" src="/images/logo.svg" alt="ComeOn Group Company Logo" />
                <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" class="block text-sm/6 font-medium text-gray-900">Username</label>
                        <div class="mt-2">
                            <input id="username" name="username" placeholder="Username" type="text" required value={username} onChange={(e) => changeUsername(e.target.value)}
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" placeholder="Password" type="password" autocomplete="current-password" required value={password} onChange={(e) => changePassword(e.target.value)}
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>
                    {error && (
                        <div class="bg-red-300 p-5 border border-red-500 rounded-lg">
                            <p class="text-red-700">{error}</p>
                        </div>
                    )}

                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
