import { AuthContextProps } from "@/@types/AuthContextProps";
import { AuthContext } from "@/contexts/auth/AuthContext";
import { ThemeContextStyle } from "@/contexts/Theme/ThemeContextStyle";
import { useContext } from "react";

export const useAuthCustom = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useTheme must be used within a AuthContext");
  }
  return context;
};
