import NextAuth from 'next-auth';

const options = {
  providers: [
    {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      version: '2.0',
      scope: 'email', // Add other scopes as needed
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: 'https://accounts.google.com/o/oauth2/token',
      requestTokenUrl: 'https://accounts.google.com/o/oauth2/auth',
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      profileUrl: 'https://www.googleapis.com/oauth2/v1/userinfo',
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }
    // Add more providers if needed
  ],
  debug: false
};

export default (req, res) => NextAuth(req, res, options);
