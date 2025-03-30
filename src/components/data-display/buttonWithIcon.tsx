import React from "react";
import styled from "styled-components";
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";

// Extend AntButtonProps to include custom props like icon, text, and textStyle
interface CustomButtonProps extends Omit<AntButtonProps, "color"> {
  radius?: string;
  padding?: string;
  width?: string;
  height?: string;
  position?: string;
  top?: string;
  maxWidth?: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  backgroundColor?: string;
  buttonColor?: string; // Renamed to avoid conflict with AntButton's color
  icon?: React.ReactNode; // Accept any React node as an icon (including SVG)
  text?: string; // Text to display in the button
  textStyle?: React.CSSProperties; // Styling for the text
  iconWidth?: string;
  iconHeight?: string;
}

// Styled Button Component
const StyledButton = styled(AntButton)<CustomButtonProps>`
  border-radius: ${(props) => props.radius || "5px"};
  padding: ${(props) => props.padding || ""};
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top || "0px"};
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  background: linear-gradient(45deg, #007bff, #8a2be2) !important;

  color: ${(props) => props.buttonColor || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-weight: ${(props) => props.fontWeight || ""};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.text && props.icon ? "8px" : "0")};
  border: ${(props) => props.border || "2px solid #D2D6DC80"} !important;

  &:hover {
    background: linear-gradient(540deg, #007bff, #8a2be2) !important;
  }
  &:active {
    background: linear-gradient(45deg, #007bff, #8a2be2) !important;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #999999;
  }
`;

const CustomButtonWithIcon: React.FC<CustomButtonProps> = ({
  radius,
  padding,
  width,
  position,
  height,
  buttonColor,
  backgroundColor,
  fontSize,
  fontWeight,
  icon,
  top,
  text,
  textStyle,
  onClick,
  disabled,
  iconWidth,
  iconHeight,
  ...rest
}) => (
  <StyledButton
    radius={radius}
    padding={padding}
    top={top}
    width={width}
    position={position}
    height={height}
    buttonColor={buttonColor}
    backgroundColor={backgroundColor}
    fontSize={fontSize}
    fontWeight={fontWeight}
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >
    {text && <span style={textStyle}>{text}</span>}
    {icon && (
      <span
        style={{
          width: iconWidth,
          height: iconHeight,
          display: "flex",
          alignItems: "center",
          marginTop: "5px",
        }}
      >
        {icon}
      </span>
    )}
  </StyledButton>
);

export { CustomButtonWithIcon };
