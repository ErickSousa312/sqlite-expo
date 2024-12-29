import { HeaderCustom } from "@/components/header/headerCustom";
import { darkTheme, lightTheme } from "@/constants/Colors";
import React, { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider as ProviderStyleComponents } from "styled-components/native";
import { AuthContext } from "./AuthContext";
import { UserType } from "@/@types/DataUser";
import { useRouter } from "expo-router";
import { useToast } from "../Toast/ToastContext";
import Api from "@/services/Api";
import urls from "@/services/urls";
import { LoginResponse } from "@/@types/Requests/LoginResponse";
export const AuthProvideCustom = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | null>(null);
  const [token, setTokenState] = useState<string | null>(null);
  const router = useRouter();
  const { addToast } = useToast();

  const logout = () => {
    return new Promise((resolve, reject) => {
      try {
        console.log("chamou o logout");
        setIsAuthenticated(false);
        resolve("Logout bem-sucedido");
      } catch (error) {
        reject("Erro ao realizar logout: ");
      }
    });
  };

  const login = async (userName: string, password: string) => {
    try {
      console.log(userName, password);
      addToast({
        type: "loading",
        message: "Verificando credenciais...",
      });
      const response = await Api.post<LoginResponse>(urls.login, {
        userName: userName,
        password: password,
      });
      if (response.status === 200) {
        addToast({
          type: "success",
          message: "Login realizado com sucesso.",
        });
        setIsAuthenticated(true);
        setTokenState(response.data.token);
        return true;
      } else {
        addToast({
          type: "error",
          message: "Credenciais inválidas, tente novamente...",
        });
        return false;
      }
    } catch (error) {
      addToast({
        type: "error",
        message: "Error com a conexão com o servidor",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, token, login, logout }}
    >
      <HeaderCustom />
      {children}
    </AuthContext.Provider>
  );
};
