import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Input as AntInput, InputProps as AntInputProps } from "antd";

interface CustomInputProps extends AntInputProps {
  width?: string;
  minWidth?: string;
  backgroundColor?: string;
  boxShadow?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  padding?: string;
  focusBorderColor?: string;
}

// Styled Input component
const StyledInput = styled(AntInput)<CustomInputProps>`
  width: ${({ width }) => width || "100%"};
  min-width: ${({ minWidth }) => minWidth || ""};
  min-height: ${({ height }) => height || " 55px"};
  box-shadow: ${({ boxShadow }) => boxShadow || "none"} !important;
  background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  color: #ffffff;
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  padding: ${({ padding }) => padding || "0 11px"};

  &::placeholder {
    color: #747781;
    font-weight: 400;
  }

  &:hover {
    background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  }

  &:focus,
  &:active {
    outline: none !important;
    background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  }
`;

// Input component with global styles
const GlobalStyles = createGlobalStyle<{
  backgroundColor?: string;
  height?: string;
}>`
.telegram-input  .ant-input-outlined,
.telegram-input .ant-input
{

height: ${({ height }) => height || " 55px"};
 background: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
  &::placeholder {
    color:rgba(255, 255, 255, 0.2) !important;
    font-weight: 500;
    font-size:16px !important;
  }
 color: #FFFFFF; 
 padding:0px 24px;    
}
.guest-code-input  .ant-input-outlined,
.guest-code-input .ant-input
{
 background: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
 &::placeholder {
    color: rgba(255, 255, 255, 0.4)!important ;
    font-weight: 500 !important;
    font-size:16px !important;
  }
 padding:0px 25px;
 color: #FFFFFF; 
}
.ant-input-clear-icon .anticon svg {
background-color: transparent !important;
  color:red !important;
  height: 20px !important;
  width: 20px !important;
}

`;
const Input: React.FC<CustomInputProps> = (props) => (
  <>
    <GlobalStyles
      backgroundColor={props.backgroundColor || "#ffffff"}
      height={props.height}
    />
    <StyledInput {...props} />
  </>
);

export { Input };
