// import { defineChain } from "viem";
// import { enviornment } from "./env";

// const { CHAIN_ID, RPC_URL } = enviornment;

// export const monadTestnet = defineChain({
//   id: CHAIN_ID,
//   name: "Monad Testnet",
//   nativeCurrency: { name: "MON", symbol: "MON", decimals: 18 },
//   rpcUrls: {
//     default: {
//       http: [RPC_URL],
//     },
//   },
//   blockExplorers: {
//     default: {
//       name: "Monad Explorer",
//       url: "https://testnet.monadexplorer.com",
//     },
//   },
//   testnet: true,
// });
// bnb-chain.ts
import { defineChain } from "viem";

export const bscTestnet = defineChain({
  id: 97, // Testnet Chain ID
  name: "BNB Smart Chain Testnet",
  nativeCurrency: { name: "BNB", symbol: "tBNB", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://data-seed-prebsc-1-s1.binance.org:8545"], // Public RPC
    },
  },
  blockExplorers: {
    default: {
      name: "BscScan",
      url: "https://testnet.bscscan.com",
    },
  },
  testnet: true,
});
