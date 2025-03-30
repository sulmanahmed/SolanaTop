import React from "react";
import styled from "styled-components";
import { Typography } from "antd";

const { Paragraph: AntParagraph } = Typography;

// Extend the props to include any additional props if needed
interface CustomParagraphProps
  extends React.ComponentProps<typeof AntParagraph> {
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: string;
  textDecoration?: string;
  lineHeight?: string;
  className?: string;
  fontStyle?: string;
}

// Create a styled version of the paragraph component
const StyledParagraph = styled(AntParagraph)<CustomParagraphProps>`
  margin: ${(props) => props.margin || ""} !important;
  padding: ${(props) => props.padding || ""} !important;
  font-size: ${(props) => props.fontSize || ""} !important;
  font-weight: ${(props) => props.fontWeight || "400px"} !important;
  color: ${(props) => props.color || ""} !important;
  text-align: ${(props) => props.textAlign || ""} !important;
  text-decoration: ${(props) => props.textDecoration || ""} !important;
  line-height: ${(props) => props.lineHeight || ""} !important;
  font-style: ${(props) => props.fontStyle || ""} !important;
`;

const Paragraph: React.FC<CustomParagraphProps> = ({
  margin,
  fontSize,
  fontWeight,
  color,
  textAlign,
  textDecoration,
  lineHeight,
  fontStyle,
  className,
  children,
  ...rest
}) => (
  <StyledParagraph
    margin={margin}
    fontSize={fontSize}
    fontWeight={fontWeight}
    color={color}
    textAlign={textAlign}
    textDecoration={textDecoration}
    lineHeight={lineHeight}
    className={className}
    fontStyle={fontStyle}
    {...rest}
  >
    {children}
  </StyledParagraph>
);

export { Paragraph };
