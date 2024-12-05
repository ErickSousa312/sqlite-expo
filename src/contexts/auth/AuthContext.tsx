import { AuthContextProps } from "@/@types/AuthContextProps";
import { UserType } from "@/@types/DataUser";
import { LoginResponse } from "@/@types/Requests/LoginResponse";
import { createContext, useContext } from "react";

export const getToken = async () => {
  //ainda tem que implementar o secure storage
  //const token = await AsyncStorage.getItem("token");
  return "";
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
);
