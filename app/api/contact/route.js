import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const payload = await request.json();
    const apiKey = process.env.NEXT_PUBLIC_CONTACT_API_KEY || "12ed572087294344bd7acf96d1ca8bd1b881ffc9d8340061ff760eea154a089b";

    const response = await fetch("https://api.ayatiworks.com/api/v1/public/tiffen-central/contact/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `API error: ${response.status} - ${errorText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Server API Route Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
