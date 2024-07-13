'use client' // for Next.js app router
import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit'


import React, { useState } from 'react';


interface VerifyWLDProps {
    onSuccess: () => void;
}

const VerifyWLD: React.FC<VerifyWLDProps> = ({ onSuccess }) => {
    const appId: `app_${string}` = process.env.NEXT_PUBLIC_WLD_CLIENT_ID as `app_${string}`;
    const handleVerify = async (proof: ISuccessResult) => {
        const res = await fetch("/api/verify", { // route to your backend will depend on implementation
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(proof),
        })
        console.log("res", res);
        if (!res.ok) {
            throw new Error("Verification failed."); // IDKit will display the error message to the user in the modal
        }
    };


    return (
        <div className="z-[60]">
            <IDKitWidget
                app_id={appId || ''} // fallback to empty string if undefined
                action={process.env.NEXT_PUBLIC_WLD_CLIENT_SECRET || ''} // fallback to empty string if undefined
                onSuccess={onSuccess} // callback when the modal is closed
                handleVerify={handleVerify} // callback when the proof is received
                verification_level={VerificationLevel.Orb}
            >
                {({ open }) =>
                    // This is the button that will open the IDKit modal
                    <button onClick={open}>Verify with World ID</button>
                }
            </IDKitWidget>
        </div>

    );
};

export default VerifyWLD;