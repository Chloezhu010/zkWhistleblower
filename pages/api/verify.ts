import { verifyCloudProof, type IVerifyResponse } from "@worldcoin/idkit";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const proof = req.body;
    const app_id = process.env.NEXT_PUBLIC_WLD_CLIENT_ID as `app_${string}`;
    const action = process.env.NEXT_PUBLIC_WLD_CLIENT_SECRET;

    const verifyRes = await verifyCloudProof(proof, app_id, action as string);
    console.log("verifyRes", verifyRes);

    if (verifyRes.success) {
      // Perform backend actions if the verification succeeds
      console.log("Verification succeeded");
      return res.status(200).json(verifyRes);
    } else {
      // Handle errors from the World ID /verify endpoint
      console.error("Verification failed", verifyRes);
      return res.status(500).json(verifyRes);
    }
  } catch (error) {
    console.error("Error verifying proof", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
