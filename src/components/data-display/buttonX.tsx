import React from "react";
import styled from "styled-components";
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";

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
  buttonColor?: string;
  icon?: React.ReactNode;
  btnText?: string;
  btnSubText?: string;
  btnTextStyle?: React.CSSProperties;
  btnSubTextStyle?: React.CSSProperties;
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
  background-color: ${(props) => props.backgroundColor || ""};
  color: ${(props) => props.buttonColor || ""};
  font-size: ${(props) => props.fontSize || ""};
  font-weight: ${(props) => props.fontWeight || ""};
  display: flex;
  flex-direction: column; /* Ensure text is displayed in separate lines */
  align-items: center;
  justify-content: center;
  gap: 4px; /* Adjust as needed for spacing between lines */
  border: ${(props) => props.border || "2px solid #D2D6DC80"} !important;

  &:hover {
    background-color: ${(props) => props.backgroundColor || ""} !important;
  }
  &:active {
    background-color: ${(props) => props.backgroundColor || ""} !important;
  }

  &:disabled {
    background-color: #f0f0f0;
    color: #999999;
  }
`;

const CustomButton: React.FC<CustomButtonProps> = ({
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
  btnText,
  btnSubText,
  btnTextStyle,
  btnSubTextStyle,
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
    {btnText && <div style={btnTextStyle}>{btnText}</div>}
    {btnSubText && <div style={btnSubTextStyle}>{btnSubText}</div>}
  </StyledButton>
);

export { CustomButton };
