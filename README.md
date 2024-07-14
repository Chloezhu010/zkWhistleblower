# zkWhistleBlower
## Description

Whistleblowers usually face asymmetric power dynamics, namely retaliation from employers, lengthy and expensive litigation, and unsubstantiated allegations etc. Victims usually don't know or cannot connect with each other to reveal the criminal wrongdoing or band together as a group to raise awareness over misdeeds.

zkWhistleblower enables good actors to verifiably publicize evidence of wrongdoing and corruption using TLS Notary and receive donations for consequential legal fees while protecting their anonymity and transacting on permissionless global networks.

Fundamentally, zkWhistleBlower is a globally accessible platform that allows whistleblowers to create a proof of the notarized TLS handshake data, the selected portions of the HTTPS response, the extracted message details, and the notary's signed hash and public key. Verify that its the owner's Twitter account and receipt of private message from someone via TLSNotary browser extension.

We used the TLSnotary hosted proxy to make TCP connection as well as the test server from the TLSNotary team. Verifying the proof involves reconstructing the TLS session using the notarized handshake data, decrypting the HTTPS response using the reconstructed session keys, extracting the relevant message details from the decrypted response, hashing the extracted data and compare it with the notary signed hash, and verifying the notary signature using the public key.

Consequently, the twitter account details of the message sender, the exact contents of the direct message, and the timestamp of when the message was accessed and notarized is proven. The whistleblower then exports the proof as a file and uploads the proof to the zkWhistleBlower platfrom for independent verification by peers.

<img width="1208" alt="Screenshot 2024-07-13 at 9 49 29 PM" src="https://github.com/user-attachments/assets/9df2e67f-fba9-4ce9-b4ac-c86faffb28f3">

<img width="1193" alt="Screenshot 2024-07-13 at 9 49 55 PM" src="https://github.com/user-attachments/assets/56498bb2-6c9e-48fe-9cf3-f9eecbc23991">

## Deployed contract address
TBD Scroll contract
[notes: Scroll's Deployed contract addresses much be included in your repo’s README.]
