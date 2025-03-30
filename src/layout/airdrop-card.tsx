import React from "react";
import { Button, Progress } from "antd";
import styled from "styled-components";

const CardContainer = styled.div`
  background: linear-gradient(45deg, #007bff, #8a2be2) !important;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 91%;
  }
`;

const JoinButton = styled(Button)`
  background: linear-gradient(45deg, #007bff, #8a2be2) !important;
  color: white;
  width: 100%;
  margin: 10px 0;
  border: 1px solid white;
  font-size: 16px;
  border-radius: 8px;

  &:hover {
    background: linear-gradient(450deg, #007bff, #8a2be2) !important;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const AirdropCard: React.FC = () => {
  return (
    <CardContainer>
      <h2>SolPadX</h2>
      <p style={{ color: "#32CD32", fontWeight: "bold" }}>🟢 Opening</p>
      <JoinButton type="primary">Join Airdrop</JoinButton>
      <p>Claim Your Free Airdrop Now!</p>
      <Progress
        percent={86.31}
        status="active"
        strokeColor="#32CD32"
        size="small"
        style={{ color: "white" }}
      />
      <p>69,051 / 80,000$</p>
      <p>💰 Airdrop: Up to 500$ or 10% of your balance</p>
      <p>⚡ Rule: FCFS, limited to one per user</p>
    </CardContainer>
  );
};

export default AirdropCard;
