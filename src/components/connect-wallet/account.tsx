import { useAccount, useDisconnect } from "wagmi";
import { Button } from "../data-display/button";
import downArrow from "/down-arrow.svg";
import upArrow from "/arrow-circle-up.svg";
import { useState } from "react";
import { DiconnectIcon } from "./dis-connect-icon";
import { CustomButtonWithIcon } from "../data-display/buttonWithIcon";
import { Flex } from "../data-display/flex";
import { Grid } from "antd";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const [showDisconnectBtn, setShowDisconnectBtn] = useState(false);
  const screens = Grid.useBreakpoint();
  const isMobile = screens.xs;
  const isTablet = screens.sm && !screens.md;

  const handleShowDisconnectBtn = () => {
    setShowDisconnectBtn(!showDisconnectBtn);
  };

  return (
    <>
      <Flex vertical>
        <Flex>
          <Button
            onClick={() => handleShowDisconnectBtn()}
            padding={isMobile || isTablet ? "0px 25px" : "8px 10px"}
            width="150px"
            fontSize={isMobile ? "16px" : isTablet ? "16px" : "16px"}
            height={isMobile || isTablet ? "40px" : "40px"}
            fontWeight="600"
          >
            {address &&
              address.slice(0, 4) + "..." + address.slice(address.length - 4)}
            {
              <img
                alt="ENS Avatar"
                src={showDisconnectBtn ? upArrow : downArrow}
              />
            }
          </Button>
        </Flex>
        <Flex position="relative">
          {showDisconnectBtn && (
            <CustomButtonWithIcon
              icon={<DiconnectIcon />}
              backgroundColor="#4FBEBF"
              position="absolute"
              top="10px"
              width="auto"
              radius="8px"
              border="0px"
              padding="8px 10px;"
              fontSize={isMobile ? "16px" : isTablet ? "16px" : "16px"}
              height={isMobile || isTablet ? "40px" : "40px"}
              fontWeight="600"
              textStyle={{ color: "white", marginRight: "10px" }}
              text="Disconnect"
              maxWidth="150px"
              onClick={() => {
                disconnect();
              }}
            />
          )}
        </Flex>
      </Flex>
    </>
  );
}
