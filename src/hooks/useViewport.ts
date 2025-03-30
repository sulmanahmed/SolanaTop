import { useEffect, useState } from "react";

const useViewport = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  useEffect(() => {
    const handleWindowResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return { width: dimensions.width, height: dimensions.height, isMobile };
};
export default useViewport;
