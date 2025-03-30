import { Grid } from "antd";
import { ConnectWalletButton } from "./connect-wallet-btn";
import { Card } from "../data-display/card";
import { Flex } from "../data-display/flex";
import { Paragraph } from "../data-display/Paragraph";

import CardIcon from "/card-icon.svg";
import TickMarkIcon from "/tick-mark.svg";
import { useAccount } from "wagmi";
import GettingThere from "../shared/getting-there";

const ConnectWallet = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = screens.xs;
  const isTablet = screens.sm && !screens.md;
  const { isConnecting, isConnected } = useAccount();
  return (
    <>
      {isConnecting || isConnected ? (
        <GettingThere message="Connecting..." />
      ) : (
        <Card
          width={isMobile ? "294px" : isTablet ? "380px" : "466px"}
          textAlign="center"
          borderRadius="24px"
          border="1px solid #4FBEBF"
          backgroundColor="#4FBEBF"
          padding={isMobile || isTablet ? "20px" : "32px"}
        >
          <Paragraph
            color="#FBFAF9"
            fontSize={isMobile ? "18px" : isTablet ? "24px" : "33px"}
            fontWeight="600"
            margin="0px"
          >
            Connect wallet to spin!
          </Paragraph>
          <Paragraph
            color="#BABECC"
            fontSize={isMobile ? "12px" : isTablet ? "14px" : "16px"}
            fontWeight="500"
          >
            Connect your wallet for a chance to spin and win a DAU Card. More
            rewards are coming—
            <a
              href="https://x.com/DAUCards"
              target="_blank"
              style={{
                color: "#BABECC",
                textDecoration: "underline",
                fontWeight: "600",
                fontSize: isMobile ? "12px" : isTablet ? "14px" : "16px",
              }}
            >
              follow us on X
            </a>
            &nbsp; to stay updated!
          </Paragraph>
          <Flex justify="center" margin="24px 0px">
            <img
              src={CardIcon}
              alt="Card Icon"
              style={{
                width: isMobile ? "92.13px" : isTablet ? "128px" : "214px",
                height: isMobile || isTablet ? "auto" : "240px",
              }}
            />
          </Flex>
          <ConnectWalletButton />
          <Flex justify="center" align="center">
            <Flex margin="24px 0px 0px 0px">
              <img
                src={TickMarkIcon}
                alt="Tick Mark Icon"
                style={{ width: isMobile ? "13px" : isTablet ? "13px" : "" }}
              />
              <Paragraph
                color="#FBFAF9"
                fontSize={isMobile ? "12px" : isTablet ? "14px" : "16px"}
                fontWeight={isMobile || isTablet ? "400" : "500"}
                margin="0px 10px "
              >
                Connecting your wallet is secure
              </Paragraph>
            </Flex>
          </Flex>
        </Card>
      )}
    </>
  );
};

export default ConnectWallet;
