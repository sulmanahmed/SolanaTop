import { Grid } from "antd";
import { Flex } from "../components/data-display/flex";
import { Paragraph } from "../components/data-display/Paragraph";
import { Button } from "../components/data-display/button";

const Footer = () => {
  const screens = Grid.useBreakpoint(); // Get responsive breakpoints
  const isMobile = screens.xs;
  const isTablet = screens.sm && !screens.md;
  return (
    <>
      <Flex
        vertical
        justify="center"
        align="center"
        margin="20px 0px 20px 0px"
        backgroundColor="#1A1333"
        height="300px"
        gap={50}
      >
        <Paragraph
          fontSize={isMobile ? "18px" : isTablet ? "24px" : "38px"}
          lineHeight="19px"
          color="#ffffff"
          margin="0px"
          padding="0 30px"
          textAlign={screens.md && !screens.xl ? "justify" : "center"}
        >
          Want to launch your project on SolPadX?
        </Paragraph>
        <Button
          backgroundColor="#4FBEBF"
          color="#ffffff"
          fontSize="16px"
          padding="10px 20px"
        >
          Apply to Launch
        </Button>
      </Flex>

      <Flex vertical justify="center" align="center" margin="20px 0px 20px 0px">
        <Paragraph
          fontSize="14px"
          lineHeight="19px"
          color="#ffffff"
          margin="0px"
          padding="0 30px"
          textAlign={screens.md && !screens.xl ? "justify" : "center"}
        >
          Participants/Citizens from the following countries are strictly
          excluded/not allowed to participate in the IDOs: Bolivia, Cambodia,
          Iran, Iraq, Libya, Nepal, Zimbabwe, Liberia, Myanmar, North Korea.
        </Paragraph>
        <Paragraph
          fontSize="14px"
          lineHeight="19px"
          color="#ffffff"
          margin="0px"
          padding="0 30px"
          textAlign={screens.md && !screens.xl ? "justify" : "center"}
        >
          © 2025 SolpadX. All rights reserved.
        </Paragraph>
      </Flex>
    </>
  );
};

export { Footer };
