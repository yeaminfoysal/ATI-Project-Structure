// src/app/api/proxy/route.ts
import { getBaseUrl } from "@/src/config/envConfig";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 * Universal proxy route to securely call external API
 * without exposing tokens to the client.
 */
export async function POST(req: NextRequest) {
    const baseURL = getBaseUrl();
    try {
        const cookieStore = await cookies();
        const accessToken = cookieStore.get("accessToken")?.value;

        const { endpoint, data } = await req.json();

        if (!endpoint) {
            return NextResponse.json(
                { message: "Missing API endpoint." },
                { status: 400 }
            );
        }

        const apiResponse = await fetch(`${baseURL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: accessToken ? `Bearer ${accessToken}` : "",
            },
            body: JSON.stringify(data),
        });

        const result = await apiResponse.json();
        return NextResponse.json(result, { status: apiResponse.status });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error("Proxy error:", error);
        return NextResponse.json(
            { message: "Internal server error", error: error.message },
            { status: 500 }
        );
    }
}
