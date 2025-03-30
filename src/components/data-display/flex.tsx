import { forwardRef } from "react";
import styled from "styled-components";
import { Flex as AntFlex, FlexProps as AntFlexProps } from "antd";

interface CustomFlexProps extends AntFlexProps {
  width?: string;
  padding?: string;
  margin?: string;
  position?: string;
  top?: string;
  right?: string;
  height?: string;
  overflowX?: string;
  overflowY?: string;
  border?: string;
  borderRadius?: string;
  backgroundColor?: string;
  flexShrinkSvg?: string;
  minHeight?: string;
  minWidth?: string;
  disabled?: boolean;
  zIndex?: string;
}

const StyledFlex = styled(AntFlex)<CustomFlexProps>`
  width: ${(props: any) => props.width || ""};
  padding: ${(props: any) => props.padding || ""};
  margin: ${(props: any) => props.margin || ""};
  position: ${(props) => props.position || ""};
  top: ${(props) => props.top || ""};
  right: ${(props) => props.right || ""};
  height: ${(props) => props.height || ""};
  overflow-x: ${(props) => props.overflowX || ""};
  overflow-y: ${(props) => props.overflowY || ""};
  border: ${(props) => props.border || ""};
  border-radius: ${(props) => props.borderRadius || ""};
  background-color: ${(props) => props.backgroundColor || ""};
  min-height: ${(props) => props.minHeight || ""};
  min-width: ${(props) => props.minWidth || ""};
  z-index: ${(props) => props.zIndex || ""};

  ${(props) =>
    props.disabled &&
    `
    pointer-events: none;
    opacity: 0.6;
  `}

  && svg {
    flex-shrink: ${(props) => props.flexShrinkSvg || ""};
  }
`;

const Flex = forwardRef<HTMLDivElement, CustomFlexProps>(
  (
    {
      padding,
      margin,
      width,
      position,
      top,
      right,
      overflowX,
      overflowY,
      height,
      border,
      borderRadius,
      backgroundColor,
      flexShrinkSvg,
      minHeight,
      minWidth,
      disabled,
      zIndex,
      children,
      ...rest
    },
    ref,
  ) => (
    <StyledFlex
      overflowX={overflowX}
      overflowY={overflowY}
      height={height}
      width={width}
      ref={ref}
      padding={padding}
      position={position}
      top={top}
      right={right}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      flexShrinkSvg={flexShrinkSvg}
      minHeight={minHeight}
      minWidth={minWidth}
      disabled={disabled}
      zIndex={zIndex}
      {...rest}
    >
      {children}
    </StyledFlex>
  ),
);

export { Flex };
