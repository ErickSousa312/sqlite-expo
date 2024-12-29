import React from "react";
import { ContainerButtonBackNavigate, ButtonBack } from "./style";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useThemeStyled } from "@/hooks/useThemed";
import { useRouter } from "expo-router";
import { useAuthCustom } from "@/hooks/useAuth";

export const ButtonBackNavigateCustom = () => {
  const { isDarkMode } = useThemeStyled();
  const router = useRouter();
  const { logout } = useAuthCustom();
  return (
    <ContainerButtonBackNavigate>
      <ButtonBack
        onPress={() => {
          logout();
          router.push("/");
        }}
      >
        {isDarkMode ? (
          <AntDesign
            style={{ marginLeft: 1 }}
            name="left"
            size={30}
            color="white"
          />
        ) : (
          <AntDesign
            style={{ marginLeft: 1 }}
            name="left"
            size={30}
            color="black"
          />
        )}
      </ButtonBack>
    </ContainerButtonBackNavigate>
  );
};
