import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { users } from '../../../mock/mockData';

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user = users.find(
                    (user) => user.name === credentials.username && user.password === credentials.password
                );

                if (user) {
                    return {
                        id: user.id,
                        name: user.name,
                        avatar: user.avatar,
                        event: user.event,
                    };
                }

                throw new Error('Invalid credentials. Please try again.');
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.avatar = user.avatar;
                token.event = user.event;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.avatar = token.avatar;
            session.user.event = token.event;
            return session;
        }
    }
});
