import { useThemeStyled } from "@/hooks/useThemed";
import {
  Button,
  ButtonText,
  Container,
  IconContainer,
  InputContainer,
  InputPassword,
  ShowPassword,
  StyledInput,
  SubTitle,
  Title,
} from "./style";
import { RocketIcon } from "@/components/svgs/rocketIcon";
import { heightScreen } from "../../constants/DimensionScreen";
import { CardsCustom } from "@/components/cards/card";
import { useRouter } from "expo-router";
import useAsyncStorageClass from "@/hooks/useAsyncStorageClass";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  BackHandler,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import horizonSvg from "../../components/svgs/horizoIcons/horizonSvg";
import HorizonSvg from "../../components/svgs/horizoIcons/horizonSvg";
import HorizonSvgComponent from "../../components/svgs/horizoIcons/horizonSvg";
import SeparatorSvg from "@/components/svgs/separators/separatorSvgBlack";
import SeparatorSvgWhite from "@/components/svgs/separators/separatorSvgWhite";
import SeparatorSvgBlack from "@/components/svgs/separators/separatorSvgBlack";
import { darkTheme, lightTheme } from "@/constants/Colors";
import ProfileIcon from "@/components/svgs/profileIcon";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InputsAuth } from "@/components/auth/InputsAuth";
import { RegisterButton } from "@/components/auth/RegisterButton";
import { useAuthCustom } from "@/hooks/useAuth";

export const HomeScreen = () => {
  const { isDarkMode } = useThemeStyled();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isPressedEmail, setIsPressedEmail] = useState(false);
  const [isPressedPassword, setIsPressedPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated } = useAuthCustom();

  const handleDismissKeyboard = () => {
    setIsPressedEmail(false);
    setIsPressedPassword(false);
    Keyboard.dismiss();
  };

  const route = useRouter();
  console.log("isAuthenticated", isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      route.push("/createClass");
    }
    const backAction = () => {
      Alert.alert("Confirmar saída", "Você tem certeza que quer sair?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => BackHandler.exitApp(), // Fecha o aplicativo se o usuário confirmar
        },
      ]);
      return true; // Impede a navegação padrão
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, [isAuthenticated]);

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
            {isDarkMode ? <SeparatorSvgWhite /> : <SeparatorSvgBlack />}
          </View>

          <Title style={{ marginTop: 35 }}>Entrar</Title>
          <SubTitle>Olá, bem-vindo ao HorizonMarketing.</SubTitle>

          <InputsAuth
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            isPressedEmail={isPressedEmail}
            setIsPressedEmail={setIsPressedEmail}
            isPressedPassword={isPressedPassword}
            setIsPressedPassword={setIsPressedPassword}
            isShowPassword={isShowPassword}
            setIsShowPassword={setIsShowPassword}
          ></InputsAuth>

          <Button onPress={() => login(email, password)}>
            <ButtonText>Acessar</ButtonText>
          </Button>
          <RegisterButton></RegisterButton>
        </>
      </Container>
    </TouchableWithoutFeedback>
  );
};
