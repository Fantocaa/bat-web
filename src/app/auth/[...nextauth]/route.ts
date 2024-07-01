import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: "meong123",
  providers: [
    CredentialsProvider({
        type: "credentials",
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          const {email. password} = credentials as {
            email: string;
            password: string
          };
          if (email === "meong@gmail.com" && password === "12341234") {
            return {
                id: 1,
                name: "meong",
                email: "meong@gmail.com",
                role: "admin"
            }
          }
      },
      }),
  ],
  callback: {
    async jwt({token, account, profile, user}: any) {
        if (account?.provider === "credentials") {
            token.email = user.email;
            token.fullname = user.fullname;
            token.role = user.role;
        }
    }
  }
};
