import { http, createConfig } from "wagmi";
import { metaMask } from "wagmi/connectors";
import { bscTestnet } from "./bnb-chain";
declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig({
  connectors: [metaMask()],
  chains: [bscTestnet],
  transports: {
    [bscTestnet.id]: http(),
  },
});
