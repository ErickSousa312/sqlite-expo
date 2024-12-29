import {
  BackHandler,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  Button,
  ButtonText,
  Container,
  InputContainer,
  StyledInput,
  SubTitle,
  Title,
} from "./style";
import { useEffect, useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import { useAuthCustom } from "@/hooks/useAuth";
import { useThemeStyled } from "@/hooks/useThemed";
import HorizonSvgComponent from "@/components/svgs/horizoIcons/horizonSvg";
import SeparatorSvgWhite from "@/components/svgs/separators/separatorSvgWhite";
import SeparatorSvgBlack from "@/components/svgs/separators/separatorSvgBlack";
import { InputsRegister } from "@/components/auth/inputsRegister";
import { LoginButton } from "@/components/auth/LoginButton";
import Api from "@/services/Api";
import urls from "@/services/urls";
import { useToast } from "@/contexts/Toast/ToastContext";
import { darkTheme, lightTheme } from "@/constants/Colors";
import { ResendCodeVerify } from "@/components/auth/resendCodeVerify";

export const VerifyAccountScreen = () => {
  const { logout } = useAuthCustom();
  const { isDarkMode } = useThemeStyled();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [code, setCode] = useState("");
  const [focusedInput, setFocusedInput] = useState<"input1" | null>(null);
  const { email } = useLocalSearchParams<{ email: string }>();
  const { addToast } = useToast();

  console.log(email, code);

  const handerlSubmit = async () => {
    console.log("submit");
    addToast({
      type: "loading",
      message: "Realizando cadastro...",
    });

    const response = await Api.post(urls.validateAccount, {
      email: email,
      code: code,
    });
    if (response.status === 200) {
      addToast({
        type: "success",
        message: "Ativação realizado com sucesso!",
      });
      logout();
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      addToast({
        type: "error",
        message: "Erro ao ativar conta!",
      });
    }
  };

  const handleDismissKeyboard = () => {
    setFocusedInput(null);
    Keyboard.dismiss();
  };

  const AccountIsValid = async () => {
    const response = await Api.post(urls.verifyIfAccountIsActive, {
      email: email,
    });
    if (response.status === 200) {
      console.log("conta ativa");
      router.push("/");
    } else {
      console.log("conta inativa varfy accontou componente");
    }
  };

  useEffect(() => {
    AccountIsValid();

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

          <Title style={{ marginTop: 45, marginBottom: 40 }}>
            Verificação de conta
          </Title>
          <SubTitle>
            Digite o código de verificação enviado para seu e-mail e WhatsApp.
          </SubTitle>
          <InputContainer
            style={[
              focusedInput === "input1" && {
                borderColor: isDarkMode ? "#EFF3F7" : "#000",
              },
            ]}
          >
            <StyledInput
              onFocus={() => setFocusedInput("input1")}
              onChangeText={(text) => setCode(text)}
              inputMode="numeric"
              value={code}
              placeholderTextColor={
                isDarkMode ? darkTheme.colors.text : lightTheme.colors.text
              }
              placeholder="Código de verificação"
              style={{ color: isDarkMode ? "#EFF3F7" : "#000" }}
            />
          </InputContainer>

          <Button onPress={() => handerlSubmit()}>
            <ButtonText>Verificar codigo</ButtonText>
          </Button>
          <ResendCodeVerify></ResendCodeVerify>
        </>
      </Container>
    </TouchableWithoutFeedback>
  );
};
