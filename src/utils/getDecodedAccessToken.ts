import { cookies } from "next/headers";
// import jwt from "jsonwebtoken"; // or jose library
import { decodedToken } from "../services/jwt";
// import { decodedToken } from "./jwt";

export const getDecodedAccessToken = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    console.log("Access token missing");
    return null;
  }

  try {
    // Decode without verifying signature
    const decoded = decodedToken(accessToken);

    // OR, if you want to verify signature (recommended):
    // const decoded = jwt.verify(accessToken, process.env.JWT_SECRET!);

    console.log("Decoded token:", decoded);
    return decoded;
  } catch (err) {
    console.error("Invalid token:", err);
    return null;
  }
};
