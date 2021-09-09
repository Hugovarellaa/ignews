import NextAuth from "next-auth";
import { session } from "next-auth/client";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(user)
      return true
    },
  }
});
