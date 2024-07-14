import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const proof = await req.json();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(proof),
      }
    );

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
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
