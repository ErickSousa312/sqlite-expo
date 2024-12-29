import {
  IconContainer,
  InputContainer,
  InputPassword,
  ShowPassword,
  StyledInput,
} from "@/screens/home/style";
import ProfileIcon from "../svgs/profileIcon";
import { useThemeStyled } from "@/hooks/useThemed";
import { darkTheme, lightTheme } from "@/constants/Colors";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState } from "react";

export const InputsRegister = ({
  email,
  password,
  setEmail,
  setPassword,
  setNome,
  setSobreNome,
  setTelefone,
  nome,
  sobreNome,
  telefone,
  setIsShowPassword,
  isShowPassword,
  setFocusedInput,
  focusedInput,
}: {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setNome: (nome: string) => void;
  setSobreNome: (sobrenome: string) => void;
  setTelefone: (telefone: string) => void;
  setIsShowPassword: (isShowPassword: boolean) => void;
  isShowPassword: boolean;
  nome: string;
  sobreNome: string;
  telefone: string;
  setFocusedInput: (
    focusedInput: "input1" | "input2" | "input3" | "input4" | null,
  ) => void;
  focusedInput: string | null;
}) => {
  const { isDarkMode } = useThemeStyled();
  const [nameCompleto, setNomeCompleto] = useState("");
  const [telefoneFormatado, setTelefoneFormatado] = useState("");

  const handleNameChange = (text: string) => {
    setNomeCompleto(text);
    const [firstName, ...lastName] = text.split(" ");
    setNome(firstName);
    setSobreNome(lastName.join(" ") || "");
  };

  const handlerTelefone = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setTelefone(numericValue);
    const telefoneFormatado = text.replace(/\D/g, "");
    const telefoneFormatadoComEspacos = telefoneFormatado.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3",
    );
    setTelefoneFormatado(telefoneFormatadoComEspacos);
  };

  return (
    <>
      <InputContainer
        style={[
          focusedInput === "input1" && {
            borderColor: isDarkMode ? "#EFF3F7" : "#000",
          },
        ]}
      >
        <IconContainer>
          <ProfileIcon></ProfileIcon>
        </IconContainer>
        <StyledInput
          onFocus={() => setFocusedInput("input1")}
          onPress={() => {}}
          onChangeText={(text) => {
            handleNameChange(text);
          }}
          value={nameCompleto}
          placeholderTextColor={
            isDarkMode ? darkTheme.colors.text : lightTheme.colors.text
          }
          placeholder="Digite seu nome completo"
          style={{ color: isDarkMode ? "#EFF3F7" : "#000" }}
        />
      </InputContainer>

      <InputContainer
        style={[
          focusedInput === "input2" && {
            borderColor: isDarkMode ? "#EFF3F7" : "#000",
          },
        ]}
      >
        <IconContainer>
          <MaterialCommunityIcons
            name="email"
            size={24}
            color={isDarkMode ? "#EFF3F7" : "#000"}
          />
        </IconContainer>
        <StyledInput
          onFocus={() => setFocusedInput("input2")}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholderTextColor={
            isDarkMode ? darkTheme.colors.text : lightTheme.colors.text
          }
          placeholder="Digite seu email"
          style={{ color: isDarkMode ? "#EFF3F7" : "#000" }}
        />
      </InputContainer>
      <InputContainer
        style={[
          focusedInput === "input3" && {
            borderColor: isDarkMode ? "#EFF3F7" : "#000",
          },
        ]}
      >
        <IconContainer style={{}}>
          <FontAwesome
            name="phone"
            size={24}
            color={isDarkMode ? "#EFF3F7" : "#000"}
          />
        </IconContainer>
        <StyledInput
          onFocus={() => setFocusedInput("input3")}
          onChangeText={(text) => handlerTelefone(text)}
          value={telefoneFormatado}
          placeholderTextColor={
            isDarkMode ? darkTheme.colors.text : lightTheme.colors.text
          }
          placeholder="Digite seu telefone"
          style={{ color: isDarkMode ? "#EFF3F7" : "#000" }}
        />
      </InputContainer>
      <InputPassword
        style={[
          focusedInput === "input4" && {
            borderColor: isDarkMode ? "#EFF3F7" : "#000",
          },
        ]}
      >
        <IconContainer style={{}}>
          <FontAwesome5
            name="key"
            size={20}
            color={isDarkMode ? "#EFF3F7" : "#000"}
          />
        </IconContainer>
        <StyledInput
          onFocus={() => setFocusedInput("input4")}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={isShowPassword}
          placeholderTextColor={
            isDarkMode ? darkTheme.colors.text : lightTheme.colors.text
          }
          style={{ color: isDarkMode ? "#EFF3F7" : "#000" }}
          placeholder="Digite sua senha"
        ></StyledInput>
        <ShowPassword
          onPress={() => setIsShowPassword(!isShowPassword)}
          style={{ marginLeft: -46 }}
        >
          <Ionicons
            style={{}}
            name={isShowPassword ? "eye" : "eye-off-sharp"}
            size={25}
            color={isDarkMode ? "#EFF3F7" : "#000"}
          />
        </ShowPassword>
      </InputPassword>
    </>
  );
};
