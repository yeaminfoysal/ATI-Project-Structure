'use server'
import { cookies } from "next/headers";

export const setAuthCookies = async (accessToken: string, refreshToken: string) => {
  const cookieStore = await cookies();
  console.log("Access token: ", accessToken, "Refresh token: ",refreshToken)

  cookieStore.set({
    name: 'accessToken',
    value: accessToken,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 15,     // 15 minutes
    sameSite: 'lax',
  });

  cookieStore.set({
    name: 'refreshToken',
    value: refreshToken,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    sameSite: 'lax',
  });
};
