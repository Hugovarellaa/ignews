import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET_ID,
      scope: "read:user",
    }),
    // ...add more providers here
  ],
});
