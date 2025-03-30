import { Flex } from "../components/data-display/flex";
import { Grid } from "antd";
import { Paragraph } from "../components/data-display/Paragraph";
import { Card } from "../components/data-display/card";
const ContentComponent = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = screens.xs;
  const isTablet = screens.sm && !screens.md;
  // const { isConnected, address } = useAccount();

  return (
    <>
      <Flex
        // position="absolute"
        // right="0px"
        top={screens.lg && !screens.xl ? "360px" : "563px"}
        align="center"
        justify="center"
        width="100%"
        gap={10}
        height="calc(100vh - 110px)"
        padding={isMobile || isTablet ? "0px 20px" : "0px 0px"}
      >
        <Card
          width={isMobile ? "294px" : isTablet ? "380px" : "400px"}
          textAlign="center"
          borderRadius="24px"
          border="1px solid #1A1333"
          backgroundColor="#1A1333"
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
        </Card>

        <Card
          width={isMobile ? "294px" : isTablet ? "380px" : "500px"}
          textAlign="center"
          borderRadius="24px"
          border="1px solid #1A1333"
          backgroundColor="#1A1333"
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
        </Card>
      </Flex>
    </>
  );
};

export default ContentComponent;
