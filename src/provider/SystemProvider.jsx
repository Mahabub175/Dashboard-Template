"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider } from "antd";

const ThemeContext = createContext();

const SystemProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;

    if (theme === "dark") {
      document.body.style.backgroundColor = "#121212";
    } else {
      document.body.style.backgroundColor = "#ffffff";
    }
  }, [theme]);
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: "#D9F27E",
            itemActiveBg: "#D9F27E",
            itemHoverBg: "#D9F27E",
            itemHoverColor: "#D9F27E",
            inkBarColor: "#D9F27E",
          },
          Table: {
            scroll: { x: 1000 },
          },
          Menu: {
            itemSelectedBg: "#D9F27E",
            itemSelectedColor: "#fff",
            itemActiveBg: "#D9F27E",
            itemActiveColor: "#fff",
            itemHoverBg: "#D9F27E",
            itemHoverColor: "#fff",
          },
          Input: {
            activeBorderColor: "#D9F27E",
            hoverBorderColor: "#D9F27E",
          },
          Upload: {
            colorPrimaryHover: "#D9F27E",
            colorPrimary: "#D9F27E",
          },
          Progress: {
            defaultColor: "#D9F27E",
          },
          Segmented: {
            itemActiveBg: "#D9F27E",
            itemSelectedBg: "#D9F27E",
          },
        },
        token: {
          colorPrimary: "#D9F27E",
          colorBorder: "#ebe7e8",
          colorPrimaryBorder: "#D9F27E",
          itemActiveBg: "#D9F27E",
        },
      }}
    >
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </ConfigProvider>
  );
};

export default SystemProvider;

export const useTheme = () => useContext(ThemeContext);
