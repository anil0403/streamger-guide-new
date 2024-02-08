import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      image: string;
      access: string;
      refresh: string;
      first_time: boolean;
    };
  }
}
