import { Grid } from "antd";

export const DiconnectIcon = () => {
  const screens = Grid.useBreakpoint();
  const isMobile = screens.xs;
  const isTablet = screens.sm && !screens.md;
  return (
    <>
      <svg
        width={isMobile || isTablet ? "16" : "16"}
        height={isMobile || isTablet ? "16" : "16"}
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 6.5L19 9.5M19 9.5L16 12.5M19 9.5L9 9.5M12 4.50023C12 3.56835 12 3.10241 11.8478 2.73486C11.6448 2.24481 11.2552 1.85523 10.7651 1.65224C10.3976 1.5 9.93188 1.5 9 1.5L4.2 1.5C3.0799 1.5 2.52023 1.5 2.09241 1.71799C1.71608 1.90973 1.40952 2.21547 1.21777 2.5918C1 3.0192 1 3.57899 1 4.69691L0.999999 14.3036C0.999999 15.4215 0.999999 15.9805 1.21777 16.4079C1.40952 16.7842 1.71608 17.0905 2.09241 17.2822C2.51981 17.5 3.07899 17.5 4.19691 17.5L9 17.5C9.93188 17.5 10.3976 17.4999 10.7651 17.3477C11.2552 17.1447 11.6448 16.7554 11.8478 16.2654C12 15.8978 12 15.4319 12 14.5"
          stroke="#FF0000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
