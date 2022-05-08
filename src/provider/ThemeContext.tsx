import { createContext } from "react";

interface ThemeContext {
  isDarkMode: boolean;
  handleDarkMode: (val: boolean) => void;
}

const initialState: ThemeContext = {
  isDarkMode: false,
  handleDarkMode: () => null,
};

const DarkThemeContext = createContext<ThemeContext>(initialState);

export default DarkThemeContext;
