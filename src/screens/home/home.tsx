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
import { heightScreen } from "../../constants/DimensionScreen";
import { CardsCustom } from "@/components/cards/card";
import { router, useRouter } from "expo-router";
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
import SeparatorSvgWhite from "@/components/svgs/separators/separatorSvgWhite";
import SeparatorSvgBlack from "@/components/svgs/separators/separatorSvgBlack";
import { InputsAuth } from "@/components/auth/InputsAuth";
import { RegisterButton } from "@/components/auth/RegisterButton";
import { useAuthCustom } from "@/hooks/useAuth";
import useBackHandler from "@/hooks/backHandler";
import VerifyAccount from "../../app/verifyAccount";

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
  const { removeBackHandler } = useBackHandler();

  useEffect(() => {
    if (isAuthenticated) {
      route.push("/createClass");
    }
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

          <Title style={{ marginTop: 45 }}>Entrar</Title>
          <SubTitle style={{ marginBottom: 30 }}>
            Olá, bem-vindo ao HorizonMarketing.
          </SubTitle>

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
          <RegisterButton routerPush="/register"></RegisterButton>
          <Pressable
            onPress={() => {
              console.log("buttom cadastre-se");
              router.push("/verifyAccount");
            }}
          >
            <Text>VerifyAccount</Text>
          </Pressable>
        </>
      </Container>
    </TouchableWithoutFeedback>
  );
};
