/* eslint-disable prettier/prettier */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { ERC20_ABI, ERC20_CROSSCHAIN_TRANSFER_ABI } from "./ABI";
import { CROSSCHAIN_TRANSFER_CONTRACT_BASE_SEPOLIA } from "./constants";
import { Chain, WalletClient, createPublicClient, encodeFunctionData, http } from "viem";

const transportUrl = (chain: Chain) =>
  `https://api.pimlico.io/v2/${chain.id}/rpc?apikey=${process.env.NEXT_PUBLIC_PIMLICO_API_KEY}`;

export const publicClient = (chain: Chain) =>
  createPublicClient({
    transport: http(chain?.rpcUrls.default.http[0].toString()),
  });
