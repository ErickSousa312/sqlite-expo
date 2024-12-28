import {
  BackHandler,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, ButtonText, Container, SubTitle, Title } from "./style";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { useAuthCustom } from "@/hooks/useAuth";
import { useThemeStyled } from "@/hooks/useThemed";
import HorizonSvgComponent from "@/components/svgs/horizoIcons/horizonSvg";
import SeparatorSvgWhite from "@/components/svgs/separators/separatorSvgWhite";
import SeparatorSvgBlack from "@/components/svgs/separators/separatorSvgBlack";

export const RegisterScreen = () => {
  const { logout } = useAuthCustom();
  const { isDarkMode } = useThemeStyled();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isPressedEmail, setIsPressedEmail] = useState(false);
  const [isPressedPassword, setIsPressedPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleDismissKeyboard = () => {
    setIsPressedEmail(false);
    setIsPressedPassword(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    const backAction = () => {
      console.log("Botão de voltar pressionado");
      logout();
      router.push("/");
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);
  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <Container>
        <>
          <View
            style={{
              width: "60%",
              height: 200,
              alignItems: "center",
            }}
          >
            <HorizonSvgComponent />
            <Text
              style={{
                marginTop: -50,
                paddingBottom: 30,
                color: isDarkMode ? "#EFF3F7" : "#000",
                fontSize: 20,
              }}
            >
              Gestor de Produtos Digitais
            </Text>
            {isDarkMode ? <SeparatorSvgWhite /> : <SeparatorSvgBlack />}
          </View>

          <Title style={{ marginTop: 45 }}>Cadastro</Title>
          <SubTitle>Olá, bem-vindo ao HorizonMarketing.</SubTitle>

          <Button onPress={() => {}}>
            <ButtonText>Acessar</ButtonText>
          </Button>
        </>
      </Container>
    </TouchableWithoutFeedback>
  );
};
