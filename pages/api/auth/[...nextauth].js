import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.NEXT_TICKET_TRACKING_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_TICKET_TRACKING_GOOGLE_CLIENT_SECRET
    }),
  ],
  callbacks: {
    signIn: async (user, account, profile) => {
      return Promise.resolve(true);
    },
    redirect: async (url, baseUrl) => {
      return Promise.resolve(`${baseUrl}/projects`);
    },
    session: async (session, user) => {
      return Promise.resolve(session);
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      return Promise.resolve(token);
    },
  }
}

export default (req, res) => NextAuth(req, res, options)