import { Grid } from "antd";
import { Flex } from "../data-display/flex";
import { Paragraph } from "../data-display/Paragraph";

const PageLoader = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = screens.xs;
  const isTablet = screens.sm && !screens.md;
  return (
    <>
      <Flex
        vertical
        justify="center"
        align="center"
        width="100%"
        height="calc(100vh - 110px)"
      >
        <Flex justify="center">
          <div className="spinner"></div>
        </Flex>
        <Paragraph
          color="#ffffff"
          fontSize={isMobile ? "16px" : isTablet ? "24px" : "32px"}
          fontWeight="600"
        >
          Getting there...
        </Paragraph>
      </Flex>
    </>
  );
};

export default PageLoader;
