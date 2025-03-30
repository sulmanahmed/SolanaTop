import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Buffer } from "buffer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { createRoot } from "react-dom/client";
import { WagmiProvider } from "wagmi";
import { config } from "./config/config.ts";
import App from "./App";
import "@solana/wallet-adapter-react-ui/styles.css";

dayjs.extend(relativeTime);
globalThis.Buffer = Buffer;

if (import.meta.env.PROD) {
  console.debug = () => {};
  console.log = () => {};
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

const root = createRoot(document.getElementById("root")!);
root.render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <ConnectionProvider endpoint="https://api.devnet.solana.com">
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <App />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </QueryClientProvider>
  </WagmiProvider>,
);
