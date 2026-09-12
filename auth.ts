import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "talia.balogun@gmail.com";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    signIn: ({ profile }) => profile?.email === ADMIN_EMAIL,
    session: ({ session }) => session,
  },
  pages: {
    signIn: "/admin/analytics",
  },
});
