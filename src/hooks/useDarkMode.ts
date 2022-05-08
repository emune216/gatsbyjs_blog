import { useContext, useLayoutEffect } from "react";

import DarkModeContext from "../provider/ThemeContext";

const useDarkMode: () => {
  isDarkMode: boolean;
  handleDarkMode: (val: boolean) => void;
} = () => {
  const { isDarkMode, handleDarkMode } = useContext(DarkModeContext);

  useLayoutEffect(() => {
    if (!localStorage.getItem("prefers-darkmode")) return;

    const prefersDarkMode: boolean = JSON.parse(
      localStorage.getItem("prefers-darkmode") as string
    );

    if (prefersDarkMode && !isDarkMode) handleDarkMode(true);
    if (!prefersDarkMode && isDarkMode) handleDarkMode(false);
  }, []);

  return {
    isDarkMode,
    handleDarkMode,
  };
};

export default useDarkMode;
