import { getSession } from 'next-auth/react';

export async function useSession() {
  try {
    const session = await getSession();
    return session;
  } catch (error) {
    throw error;
  }
}
