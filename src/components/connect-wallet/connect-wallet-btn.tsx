import { useAccount } from "wagmi";
import { Account } from "./account";
import ConnectWalletModal from "../modal/connect-wallet-modal";

function ConnectWalletButton() {
  const { isConnected, isDisconnected } = useAccount();

  if (isConnected && isDisconnected === false) return <Account />;
  return <ConnectWalletModal />;
}

export { ConnectWalletButton };
