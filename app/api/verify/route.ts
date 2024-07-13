import { type IVerifyResponse, verifyCloudProof } from "@worldcoin/idkit";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const proof = await req.json();
  const app_id = process.env.NEXT_PUBLIC_APP_ID as `app_${string}`;
  const action = process.env.NEXT_PUBLIC_ACTION as `action_${string}`;
  const verifyRes = {
    success: true,
    action: "my_action",
    nullifier_hash:
      "0x2bf8406809dcefb1486dadc96c0a897db9bab002053054cf64272db512c6fbd8",
    created_at: "2023-02-18T11:20:39.530041+00:00",
  };
  console.log("verifyRes", verifyRes);

  if (verifyRes.success) {
    // This is where you should perform backend actions if the verification succeeds
    // Such as, setting a user as "verified" in a database
    console.log("Verification succeeded");
    return NextResponse.json(verifyRes, { status: 200 });
  } else {
    // This is where you should handle errors from the World ID /verify endpoint.
    // Usually these errors are due to a user having already verified.
    return NextResponse.json(verifyRes, { status: 500 });
  }
}
