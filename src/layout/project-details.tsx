import { Paragraph } from "../components/data-display/Paragraph";
import React from "react";
import styled from "styled-components";
import WhyChooseSolpadX from "./details-section";
import { TwitterOutlined, GlobalOutlined } from "@ant-design/icons";
import { FaTelegramPlane } from "react-icons/fa";
import { Flex } from "../components/data-display/flex";

const ProjectContainer = styled.div`
  background: linear-gradient(45deg, #007bff, #8a2be2) !important;
  padding: 20px;
  border-radius: 10px;
  color: white;
  flex: 1;
`;
const IconContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;

  a {
    color: white;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: rgb(0, 255, 247);
    }
  }
`;

const ProjectDetails: React.FC = () => {
  return (
    <ProjectContainer>
      <h2>Welcome to SolpadX</h2>
      <Paragraph fontSize="16px" lineHeight="24px" margin="0px" color="white">
        Your Gateway to Exclusive Airdrops & Token Launches! Claim free
        airdrops, participate in early-stage token launches, and maximize your
        crypto journey with SolpadX.
      </Paragraph>
      <Paragraph fontSize="16px" lineHeight="24px" margin="0px" color="white">
        SolpadX is a cutting-edge platform that connects users with high-value
        airdrops and early-stage token launches, ensuring fair distribution and
        seamless accessibility.
      </Paragraph>
      <WhyChooseSolpadX />

      <IconContainer>
        <a
          href="https://twitter.com/solpadx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterOutlined />
        </a>
        <a
          href="https://t.me/solpadx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane />
        </a>
        <a href="https://solpadx.com" target="_blank" rel="noopener noreferrer">
          <GlobalOutlined />
        </a>
      </IconContainer>
      <Flex vertical justify="center" align="start" margin="20px 0px">
        <Paragraph
          fontSize="38px"
          lineHeight="24px"
          margin="0px"
          color="white"
          fontWeight="600"
        >
          Token
        </Paragraph>
        <Flex
          justify="center"
          align="start"
          margin="20px 0px 10px 0px"
          gap="5px"
        >
          <Paragraph
            fontSize="16px"
            lineHeight="24px"
            margin="0px"
            color="white"
            fontWeight="600"
          >
            Token :
          </Paragraph>
          <Paragraph
            fontSize="16px"
            lineHeight="24px"
            margin="0px"
            color="white"
            fontWeight="600"
          >
            $SOLPADX
          </Paragraph>
        </Flex>

        <Flex
          justify="center"
          align="start"
          margin="0px 0px 10px 0px"
          gap="5px"
        >
          <Paragraph
            fontSize="16px"
            lineHeight="24px"
            margin="0px"
            color="white"
            fontWeight="600"
          >
            Type :
          </Paragraph>
          <Paragraph
            fontSize="16px"
            lineHeight="24px"
            margin="0px"
            color="white"
            fontWeight="600"
          >
            Multi-Chain
          </Paragraph>
        </Flex>
        <Flex
          justify="center"
          align="start"
          margin="0px 0px 10px 0px"
          gap="5px"
        >
          <Paragraph
            fontSize="16px"
            lineHeight="24px"
            margin="0px"
            color="white"
            fontWeight="600"
          >
            Total Supply:
          </Paragraph>
          <Paragraph
            fontSize="16px"
            lineHeight="24px"
            margin="0px"
            color="white"
            fontWeight="600"
          >
            1,000,000,000 $SOLPADX
          </Paragraph>
        </Flex>
        <Flex
          justify="center"
          align="start"
          margin="0px 0px 10px 0px"
          gap="5px"
        >
          <Paragraph
            fontSize="16px"
            lineHeight="24px"
            margin="0px"
            color="white"
            fontWeight="600"
          >
            Market Cap:
          </Paragraph>
          <Paragraph
            fontSize="16px"
            lineHeight="24px"
            margin="0px"
            color="white"
            fontWeight="600"
          >
            $47 750 747
          </Paragraph>
        </Flex>
        <Flex
          justify="center"
          align="start"
          margin="20px 0px 10px 0px"
          gap="10px"
          vertical
        >
          <Paragraph
            fontSize="38px"
            lineHeight="24px"
            margin="0px"
            color="white"
            fontWeight="600"
          >
            Distribution
          </Paragraph>
          <Flex
            justify="center"
            align="start"
            margin="0px 0px 10px 0px"
            gap="5px"
          >
            <Paragraph
              fontSize="16px"
              lineHeight="24px"
              margin="0px"
              color="white"
              fontWeight="600"
            >
              Distribution:
            </Paragraph>
            <Paragraph
              fontSize="16px"
              lineHeight="24px"
              margin="0px"
              color="white"
              fontWeight="600"
            >
              Claimed on TrustPad
            </Paragraph>
          </Flex>
        </Flex>
      </Flex>
    </ProjectContainer>
  );
};

export default ProjectDetails;
