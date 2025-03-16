import React, { createContext, useContext, useState, useEffect } from "react";
import { Appearance } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lightTheme, darkTheme } from "./Theme";

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark" | "auto">("auto"); // Tracks user selection
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(
    Appearance.getColorScheme() || "light"
  ); // Default to "light" in case it's null

  useEffect(() => {
    // Load theme from AsyncStorage when app starts
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme as "light" | "dark" | "auto");
      }
    };
    loadTheme();
  }, []);

  useEffect(() => {
    // Listen for system theme changes
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setSystemTheme(colorScheme || "light");
    });

    return () => subscription.remove();
  }, []);

  // Save theme to AsyncStorage whenever it changes
  useEffect(() => {
    AsyncStorage.setItem("theme", theme);
  }, [theme]);

  // Resolve applied theme
  const appliedTheme = theme === "auto" ? systemTheme : theme;
  const colors = appliedTheme === "dark" ? darkTheme : lightTheme; // Ensure correct colors are applied

  console.log("Theme:", theme, "| System Theme:", systemTheme, "| Applied Theme:", appliedTheme); // Debugging log

  const toggleTheme = (selectedTheme: "light" | "dark" | "auto") => {
    setTheme(selectedTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme, // Selected option (light, dark, auto)
        appliedTheme, // Actual applied theme (resolves "auto" to light/dark)
        colors, // Ensures correct colors are applied
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
