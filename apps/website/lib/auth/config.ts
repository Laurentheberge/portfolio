import type { NextAuthConfig } from 'next-auth';

export type User = {
  name: string;
  picture: string;
  sub: string;
  email?: string;
};

const authConfig: NextAuthConfig = {
  debug: process.env.NODE_ENV !== 'production',
  secret: process.env.AUTH_SECRET as string,
  session: {
    strategy: 'jwt',
  },
  providers: [],
  callbacks: {
    session({ session, token }) {
      if (session?.user && token.sub) {
        session.user.sub = token.sub;
      }
      return session;
    },
  },
};

export default authConfig;
