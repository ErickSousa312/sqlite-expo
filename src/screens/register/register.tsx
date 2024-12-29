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
import { InputsRegister } from "@/components/auth/inputsRegister";
import { LoginButton } from "@/components/auth/LoginButton";
import Api from "@/services/Api";
import urls from "@/services/urls";
import { useToast } from "@/contexts/Toast/ToastContext";

export const RegisterScreen = () => {
  const { logout } = useAuthCustom();
  const { isDarkMode } = useThemeStyled();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isPressedEmail, setIsPressedEmail] = useState(false);
  const [isPressedPassword, setIsPressedPassword] = useState(false);
  const [isPressedNome, setIsPressedNome] = useState(false);
  const [isPressedTelefone, setIsPressedTelefone] = useState(false);

  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [password, setPassword] = useState("");

  const { addToast } = useToast();

  console.log(nome, sobreNome, email, telefone, password);

  const handerlSubmit = async () => {
    console.log("submit");
    addToast({
      type: "loading",
      message: "Realizando cadastro...",
    });

    const response = await Api.post(urls.register, {
      nome,
      sobrenome: sobreNome,
      email,
      telefone,
      senha: password,
    });
    if (response.status === 201) {
      addToast({
        type: "success",
        message: "Cadastro realizado com sucesso!",
      });
      router.push("/createClass");
    } else {
      addToast({
        type: "error",
        message: "Erro ao cadastrar",
      });
    }
  };

  const handleDismissKeyboard = () => {
    setFocusedInput(null);
    Keyboard.dismiss();
  };

  const [focusedInput, setFocusedInput] = useState<
    "input1" | "input2" | "input3" | "input4" | null
  >(null);

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

          <Title style={{ marginTop: 45, marginBottom: 40 }}>Cadastro</Title>
          <InputsRegister
            nome={nome}
            sobreNome={sobreNome}
            email={email}
            telefone={telefone}
            password={password}
            setNome={setNome}
            setSobreNome={setSobreNome}
            setEmail={setEmail}
            setTelefone={setTelefone}
            setPassword={setPassword}
            isShowPassword={isShowPassword}
            setIsShowPassword={setIsShowPassword}
            focusedInput={focusedInput}
            setFocusedInput={setFocusedInput}
          ></InputsRegister>

          <Button onPress={() => handerlSubmit()}>
            <ButtonText>Cadastrar</ButtonText>
          </Button>
          <LoginButton></LoginButton>
        </>
      </Container>
    </TouchableWithoutFeedback>
  );
};
