import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Flex } from "../components/data-display/flex";

const { Title, Text } = Typography;

// Styled component for better design
const StyledCard = styled(Card)`
  background: #1e1e2f;
  border-radius: 10px;
  color: white;
  border: none;
  text-align: center;
  transition: 0.3s;
  padding: 14px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
  }

  .ant-typography {
    color: white;
  }

  .anticon {
    color: #52c41a;
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const WhyChooseSolpadX: React.FC = () => {
  const features = [
    {
      title: "Verified & Trusted",
      description: "No scams, only authentic opportunities",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Multi-Chain Support",
      description: "Solana, Ethereum, BSC & more coming soon",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Fast & Secure Claims",
      description: "Your rewards, delivered instantly and safely",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Community-Driven",
      description: "Transparent, fair, and inclusive process",
      icon: <CheckCircleOutlined />,
    },
  ];

  return (
    <Flex vertical>
      <Title style={{ color: "white" }}>
        Why Choose <span style={{ color: "#52c41a" }}>SolpadX?</span>
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={12} lg={6} key={index}>
            <StyledCard>
              {feature.icon}
              <Title level={4}>{feature.title}</Title>
              <Text>{feature.description}</Text>
            </StyledCard>
          </Col>
        ))}
      </Row>

      {/* <div style={{ marginTop: "30px" }}>
        <StyledCard
          style={{ background: "#52c41a", color: "white", cursor: "pointer" }}
        >
          <GiftOutlined style={{ fontSize: "30px" }} />
          <Title level={4} style={{ color: "white", marginTop: "10px" }}>
            Claim Your Free Airdrop Today!
          </Title>
        </StyledCard>
      </div> */}
    </Flex>
  );
};

export default WhyChooseSolpadX;
