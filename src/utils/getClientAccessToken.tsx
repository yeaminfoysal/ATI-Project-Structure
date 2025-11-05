import Cookies from "js-cookie";

// ✅ Client-side only function
export function getClientAccessToken(): string | null {
  const token = Cookies.get("accessToken");
  console.log(token)
  return token || null;
}
