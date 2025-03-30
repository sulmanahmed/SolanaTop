import React from "react";
import styled from "styled-components";
import { Card as AntCard } from "antd";

interface CustomCardProps extends React.ComponentProps<typeof AntCard> {
  margin?: string;
  height?: string;
  width?: string;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  padding?: string;
  border?: string;
  textAlign?: string;
  hoverEffect?: boolean;
  overflow?: string;
}

const StyledCard = styled(AntCard)<CustomCardProps>`
  margin: ${(props) => props.margin || ""};
  height: ${(props) => props.height || ""};
  width: ${(props) => props.width || ""};
  background: ${(props) => props.backgroundColor || ""};
  border-radius: ${(props) => props.borderRadius || "4px"};
  box-shadow: ${(props) => props.boxShadow || "0 4px 6px rgba(0, 0, 0, 0.1)"};
  padding: ${(props) => props.padding || "16px"};
  border: ${(props) => props.border || "1px solid #f0f0f0"};
  overflow: ${(props) => props.overflow || "hidden"};
  text-align: ${(props) => props.textAlign || "start"};
  transition: ${(props) =>
    props.hoverEffect ? "transform 0.2s ease, box-shadow 0.2s ease" : ""};

  ${(props) =>
    props.hoverEffect &&
    `
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }
  `}
`;

const Card: React.FC<CustomCardProps> = ({
  margin,
  height,
  width,
  backgroundColor,
  borderRadius,
  boxShadow,
  padding,
  border,
  hoverEffect = false,
  overflow,
  className,
  textAlign = "start",
  children,
  ...rest
}) => (
  <StyledCard
    margin={margin}
    height={height}
    width={width}
    backgroundColor={backgroundColor}
    borderRadius={borderRadius}
    boxShadow={boxShadow}
    padding={padding}
    border={border}
    textAlign={textAlign}
    hoverEffect={hoverEffect}
    overflow={overflow}
    className={className}
    {...rest}
  >
    {children}
  </StyledCard>
);

export { Card };
