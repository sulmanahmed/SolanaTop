export const enviornment = {
  API_URL: (import.meta.env.VITE_API_URL ?? "") as string,
  RPC_URL: (import.meta.env.VITE_RPC_URL ?? "") as string,
  CHAIN_ID: (import.meta.env.VITE_CHAIN_ID ?? 0) as number,
  CONTRACT_ADDRESS: (import.meta.env.VITE_CONTRACT_ADDRESS ??
    `0x00`) as `0x${string}`,
  TCP_TELEGRAM_BOT: (import.meta.env.VITE_TCP_TELEGRAM_BOT ?? "") as string,
  GA_MEASUREMENT_ID: (import.meta.env.VITE_GA_MEASUREMENT_ID ?? "") as string,
  MONAD_FAUCET_URL: (import.meta.env.VITE_MONAD_FAUCET_URL ?? "") as string,
  MONAD_SPIN_FEE: (import.meta.env.VITE_MONAD_SPIN_FEE ?? "0") as string,
  SENTRY_DSN: (import.meta.env.VITE_SENTRY_DSN ?? "") as string,
};
