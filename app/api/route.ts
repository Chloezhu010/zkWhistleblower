import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const proof = await req.json();
    const response = await fetch(`localhost:3001/api/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proof),
    });

    const verifyRes = await response.json();
    if (response.ok) {
      console.log("Verification succeeded", verifyRes);
      return NextResponse.json(verifyRes, { status: 200 });
    } else {
      console.error("Verification failed", verifyRes);
      return NextResponse.json(verifyRes, { status: 500 });
    }
  } catch (error) {
    console.error("Error verifying proof", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
