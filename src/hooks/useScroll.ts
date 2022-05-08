import { useState, useEffect } from "react";
import _ from "lodash";

const useScroll: () => {
  scrollY: number;
} = () => {
  const [scrollY, SetScrollY] = useState<number>(0);

  const handleScroll = () => {
    SetScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", _.throttle(handleScroll, 200));
  }, []);

  return {
    scrollY,
  };
};

export default useScroll;
