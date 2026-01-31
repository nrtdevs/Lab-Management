import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    // Add your user verification logic here.
                    // For this demo, we'll return a mock user if credentials are valid format
                    // In real app: getUser(email) -> bcrypt.compare(password, user.password)

                    if (email === 'user@nextjs.com' && password === '123456') {
                        return {
                            id: '1',
                            name: 'Test User',
                            email: 'user@nextjs.com',
                        };
                    }
                    // Allow any login for demo purposes if not specific user
                    return {
                        id: '2',
                        name: 'Demo User',
                        email: email,
                    };
                }
                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});
