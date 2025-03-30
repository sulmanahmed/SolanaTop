import { Grid } from "antd";
import { Card } from "../data-display/card";
import { Flex } from "../data-display/flex";
import { Paragraph } from "../data-display/Paragraph";

import CardIcon from "/card-icon.svg";
import TickMarkIcon from "/tick-mark.svg";
import { useDisconnect } from "wagmi";
import { CustomButtonWithIcon } from "../data-display/buttonWithIcon";
import { DiconnectIcon } from "./dis-connect-icon";

const UnsupportedChain = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = screens.xs;
  const isTablet = screens.sm && !screens.md;

  const { disconnect } = useDisconnect();
  return (
    <Card
      width={isMobile ? "294px" : isTablet ? "380px" : "466px"}
      textAlign="center"
      height={isMobile || isTablet ? "auto" : "505px"}
      borderRadius="24px"
      border="1px solid #4FBEBF"
      backgroundColor="#4FBEBF"
      padding={isMobile || isTablet ? "20px" : "32px"}
    >
      <Flex
        vertical
        padding={isMobile || isTablet ? "0 12px" : "0 15.5px"}
        margin="0"
      >
        <Paragraph
          color="#FBFAF9"
          fontSize={isMobile ? "18px" : isTablet ? "24px" : "33px"}
          fontWeight="600"
          margin="0px"
        >
          Switch to Monad Testnet
        </Paragraph>
        <Paragraph
          color="#BABECC"
          fontSize={isMobile ? "12px" : isTablet ? "14px" : "16px"}
          fontWeight="500"
          lineHeight="22px"
          padding={isMobile || isTablet ? "0" : "0 5px"}
        >
          Switch to the Monad Testnet to unlock a chance to spin & win a DAU
          Card!
        </Paragraph>
      </Flex>

      <Flex justify="center" margin="24px 0px">
        <img
          src={CardIcon}
          alt="Card Icon"
          style={{ width: isMobile ? "92.13px" : isTablet ? "128px" : "" }}
        />
      </Flex>
      <CustomButtonWithIcon
        icon={<DiconnectIcon />}
        backgroundColor="#23264D"
        width="100%"
        radius="99px"
        border="0px"
        padding="16px 26px"
        fontSize={isMobile ? "16px" : isTablet ? "16px" : "22px"}
        height={isMobile || isTablet ? "42px" : "57px"}
        fontWeight="600"
        textStyle={{ color: "white", marginRight: "10px" }}
        text="Disconnect"
        onClick={() => {
          disconnect();
        }}
      />
      <Flex justify="center" align="center">
        <Flex margin="16px 0px 0px 0px">
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
  );
};

export default UnsupportedChain;
