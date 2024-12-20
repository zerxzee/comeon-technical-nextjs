import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    const response = await fetch('http://localhost:3001/api/login', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: credentials.username,
                            password: credentials.password
                        })
                    });

                    if (!response.ok) {
                        throw new Error('Invalid credentials. Please try again.');
                    }

                    const user = await response.json();

                    return {
                        id: user.id,
                        name: user.name,
                        avatar: user.avatar,
                        event: user.event,
                        username: user.username,
                    };
                } catch (error) {
                    console.error('Authentication error:', error);
                    throw new Error('Invalid credentials. Please try again.');
                }
            }
        })
    ],
    events: {
        async signOut({ token }) {
            try {
                await fetch('http://localhost:3001/api/logout', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: token?.username || 'unknown_user'
                    })
                });
            } catch (error) {
                console.error('Error during logout:', error);
            }
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60,
        updateAge: 30 * 60,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.avatar = user.avatar;
                token.event = user.event;
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.avatar = token.avatar;
            session.user.event = token.event;
            session.user.username = token.username;
            return session;
        }
    }
});
