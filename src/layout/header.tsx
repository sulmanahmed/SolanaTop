import React from "react";
import { Avatar, Grid, Menu } from "antd";
import styled, { createGlobalStyle } from "styled-components";
import { ConnectWalletButton } from "../components/connect-wallet/connect-wallet-btn";
import AppLogo from "../../public/applogo.png";
import { Button } from "../components/data-display/button";
import { Flex } from "../components/data-display/flex";
import AppSmallLogo from "../../public/Favicon.jpeg";

// Global styles for menu links
const GlobalStyle = createGlobalStyle`
  .ant-menu-item {
    color: white !important;
  }

  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu-item-selected {
    color: white !important;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: #0d0d1d;
`;

const StyledMenu = styled(Menu)`
  background: transparent;
  border-bottom: none;
`;

const Header: React.FC = () => {
  const screens = Grid.useBreakpoint();

  const isMobile = screens.xs;
  const isTablet = screens.sm && !screens.md;
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <Avatar
          src={isMobile ? AppSmallLogo : AppLogo}
          style={{
            width: isMobile ? "30px" : "200px",
            height: isMobile ? "30px" : "60px",
          }}
          shape="square"
        />
        <StyledMenu mode="horizontal">
          <Menu.Item key="airdrop">Airdrop 🔥</Menu.Item>
          <Menu.Item key="faq">FAQ</Menu.Item>
        </StyledMenu>
        <Flex align="center" gap={10} justify="center">
          <Button
            padding={isMobile || isTablet ? "0px 25px" : "8px 10px"}
            fontSize={isMobile ? "16px" : isTablet ? "16px" : "16px"}
            height={isMobile || isTablet ? "40px" : "40px"}
            style={{ display: isMobile || isTablet ? "none" : "block" }}
            width="150px"
          >
            Buy TPAD
          </Button>
          <ConnectWalletButton />
        </Flex>
      </HeaderContainer>
    </>
  );
};

export default Header;
