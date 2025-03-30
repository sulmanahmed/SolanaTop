import { Grid } from "antd";
import { Card } from "../data-display/card";
import { Flex } from "../data-display/flex";
import { Paragraph } from "../data-display/Paragraph";

const GettingThere = ({
  message = "Getting there...",
}: {
  message?: string;
}) => {
  const screens = Grid.useBreakpoint();
  const isMobile = screens.xs;
  const isTablet = screens.sm && !screens.md;
  return (
    <Card
      width={isMobile ? "294px" : isTablet ? "380px" : "466px"}
      textAlign="center"
      height="505px"
      borderRadius="24px"
      border="1px solid #4FBEBF"
      backgroundColor="#4FBEBF"
      padding="32px"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Flex justify="center">
        <div className="spinner"></div>
      </Flex>
      <Paragraph
        color="#D2D6DC"
        fontSize={isMobile ? "16px" : isTablet ? "24px" : "32px"}
        fontWeight="600"
      >
        {message}
      </Paragraph>
    </Card>
  );
};

export default GettingThere;
