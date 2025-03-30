// import React from "react";
// import styled, { createGlobalStyle } from "styled-components";
// import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";

// // Extend AntButtonProps and override 'color' for flexibility
// interface CustomButtonProps extends Omit<AntButtonProps, "color"> {
//   radius?: string;
//   padding?: string;
//   width?: string;
//   height?: string;
//   maxWidth?: string;
//   fontSize?: string;
//   fontWeight?: string;
//   border?: string;
//   backgroundColor?: string;
//   color?: string;
//   className?: string;
//   isDisable?: boolean;
// }

// const GlobalButtonStyles = createGlobalStyle<{
//   border?: string;
//   backgroundColor?: string;
//   color?: string;
//   isDisable?: boolean;
// }>`
//   .normal-btn {
//     border: ${(props) => props.border || "none"} !important;
//     background: linear-gradient(
//     45deg,
//     #007bff,
//     #8a2be2
//   );
//     color: ${(props) => props.color || "white"} !important;
//     &:hover {
//       border: ${(props) => props.border || "none"} !important;
//       background: linear-gradient(
//     540deg,
//     #007bff,
//     #8a2be2
//   ) !important;
//       color: ${(props) => props.color || "white"} !important;
//     }
//   }

//   .ant-btn {
//     @media (max-width: 768px) {
//       cursor: none !important;
//     }
//   }

// `;

// const StyledButton = styled(AntButton)<CustomButtonProps>`
//   border-radius: ${(props) => props.radius || "8px"};
//   padding: ${(props) => props.padding || "8px 16px"};
//   min-width: ${(props) => props.width || "258px"};
//   width: ${(props) => props.width || "258px"};
//   height: ${(props) => props.height || "55px"};
//   background: linear-gradient(45deg, #007bff, #8a2be2) !important;
//   color: ${(props) => props.color || "white"};
//   border: ${(props) => props.border || "none"};
//   font-size: ${(props) => props.fontSize || "22px"};
//   font-weight: ${(props) => props.fontWeight || "600"};
//   opacity: ${(props) => (props.disabled ? "50%" : "100%")} !important;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background: linear-gradient(45deg, #0056b3, #6a1bbd);
//   }
// `;

// const Button: React.FC<CustomButtonProps> = ({
//   children,
//   border,
//   className,
//   backgroundColor,
//   color,
//   isDisable,
//   ...rest
// }) => (
//   <>
//     <GlobalButtonStyles
//       border={border}
//       backgroundColor={backgroundColor}
//       color={color}
//       isDisable={isDisable}
//     />
//     <StyledButton
//       className={`normal-btn ${className || ""}`}
//       {...rest}
//       disabled={isDisable}
//     >
//       {children}
//     </StyledButton>
//   </>
// );

// export { Button };
import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";

// Extend AntButtonProps and override 'color' for flexibility
interface CustomButtonProps extends Omit<AntButtonProps, "color"> {
  radius?: string;
  padding?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  backgroundColor?: string;
  color?: string;
  className?: string;
  isDisable?: boolean;
}

// Global styles for .normal-btn class
const GlobalButtonStyles = createGlobalStyle<{
  border?: string;
  backgroundColor?: string;
  color?: string;
  isDisable?: boolean;
}>`
  .normal-btn {
    border: ${(props) => props.border || "none"} !important;
    background: linear-gradient(45deg, #007bff, #8a2be2);
    color: ${(props) => props.color || "white"} !important;
    &:hover {
      border: ${(props) => props.border || "none"} !important;
      background: linear-gradient(540deg, #007bff, #8a2be2) !important;
      color: ${(props) => props.color || "white"} !important;
    }
  }

  .ant-btn {
    @media (max-width: 768px) {
      cursor: none !important;
    }
  }
`;

// Hover animation keyframes
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(138, 43, 226, 0);
  }
  100% {
    transform: scale(1.03);
    box-shadow: 0 0 12px rgba(138, 43, 226, 0.6);
  }
`;

// Styled AntButton with custom props
const StyledButton = styled(AntButton)<CustomButtonProps>`
  border-radius: ${(props) => props.radius || "8px"};
  padding: ${(props) => props.padding || "8px 16px"};
  min-width: ${(props) => props.width || "258px"};
  width: ${(props) => props.width || "258px"};
  height: ${(props) => props.height || "55px"};
  background: linear-gradient(45deg, #007bff, #8a2be2) !important;
  color: ${(props) => props.color || "white"};
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize || "22px"};
  font-weight: ${(props) => props.fontWeight || "600"};
  opacity: ${(props) => (props.disabled ? "50%" : "100%")} !important;
  transition: all 0.3s ease-in-out;
  transform: scale(1);

  &:hover {
    background: linear-gradient(45deg, #0056b3, #6a1bbd);
    animation: ${hoverAnimation} 0.3s forwards;
  }
`;

// Main Button Component
const Button: React.FC<CustomButtonProps> = ({
  children,
  border,
  className,
  backgroundColor,
  color,
  isDisable,
  ...rest
}) => (
  <>
    <GlobalButtonStyles
      border={border}
      backgroundColor={backgroundColor}
      color={color}
      isDisable={isDisable}
    />
    <StyledButton
      className={`normal-btn ${className || ""}`}
      {...rest}
      disabled={isDisable}
    >
      {children}
    </StyledButton>
  </>
);

export { Button };
