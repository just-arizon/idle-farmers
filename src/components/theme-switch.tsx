import { useEffect } from "react";
import { useTheme } from "@heroui/use-theme";

export const ThemeSwitch = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    // Lock to light mode once the component mounts
    setTheme("light");
  }, [setTheme]);

  return null; // Remove the toggle UI entirely
};
