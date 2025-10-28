import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string | null;
    };
  }

  interface User {
    id: string;
    email?: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials", 
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("Email or Password Missing");
          return null;
        }

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/users/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
               credentials: "include",
            });

          if (!res.ok) {
            console.error("Login Failed", await res.text());
            return null;
          }

          const data = await res.json();

          if (data.user?.id) {
            return {
              id: data.user.id,
              email: data.user.email,
            };
          }

          return null;
        } catch (err) {
          console.error("Login Error:", err);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
