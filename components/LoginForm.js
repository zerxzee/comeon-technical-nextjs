import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';

export default function LoginForm() {
    const router = useRouter();
    const { data: session } = useSession();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn('credentials', {
                redirect: false,
                username,
                password,
            });

            if (res?.error) {
                setError(res.error);
            } else {
                router.push('/casino');
            }
        } catch (error) {
            console.error('Login Error:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    const handleChange = (field, value) => {
        if (field === 'username') {
            setUsername(value);
        } else if (field === 'password') {
            setPassword(value);
        }
        setError('');
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-neutral-300 w-3/4 drop-shadow-xl">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-16 w-auto" src="/images/logo.svg" alt="ComeOn Group Company Logo" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Username</label>
                        <div className="mt-2">
                            <input id="username" name="username" placeholder="Username" type="text" required value={username} onChange={(e) => handleChange('username', e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" placeholder="Password" type="password" required value={password} onChange={(e) => handleChange('password', e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>
                    {error && (
                        <div className="bg-red-300 p-5 border border-red-500 rounded-lg">
                            <p className="text-red-700">{error}</p>
                        </div>
                    )}

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
