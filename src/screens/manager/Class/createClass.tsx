import { useThemeStyled } from "@/hooks/useThemed";
import { RocketIcon } from "@/components/svgs/rocketIcon";
import { CardsCustom } from "@/components/cards/card";
import {
  Button,
  ButtonText,
  Container,
  InputContainer,
  StyledInput,
  SubTitle,
  Title,
} from "./style";
import { ButtonBackNavigateCustom } from "@/components/buttons/backNavigate/buttonBackNavigate";
import useAsyncStorageclass from "@/hooks/useAsyncStorageClass";
import { darkTheme, lightTheme } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { useToast } from "@/contexts/Toast/ToastContext";
import CreateClassIcon from "@/components/svgs/createClassIcon";
import { BackHandler } from "react-native";
import { useRouter } from "expo-router";
import { useAuthCustom } from "@/hooks/useAuth";

export const CreateClass = () => {
  const { isDarkMode } = useThemeStyled();
  const [inputClass, setInputClass] = useState("");
  const { addToast } = useToast();
  const router = useRouter();
  const { logout } = useAuthCustom();

  useEffect(() => {
    // Função que será chamada quando o botão de voltar for pressionado
    const backAction = () => {
      console.log("Botão de voltar pressionado");
      logout();
      router.push("/");
      return true;
    };

    // Adiciona o ouvinte para o evento do botão de voltar
    BackHandler.addEventListener("hardwareBackPress", backAction);

    // Cleanup: Remove o ouvinte quando o componente for desmontado
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  return (
    <Container>
      <ButtonBackNavigateCustom />
      <CreateClassIcon />
      <Title style={{ marginTop: 15 }}>Nova Turma</Title>
      <SubTitle>crie uma turma para adicionar pessoas</SubTitle>
      <InputContainer>
        <StyledInput
          onChangeText={(text) => setInputClass(text)}
          value={inputClass}
          placeholderTextColor={
            isDarkMode ? darkTheme.colors.text : lightTheme.colors.text
          }
          placeholder="Nome da turma"
        ></StyledInput>
      </InputContainer>
      {/* <Button onPress={() => console.log(storedValue)}>
        <ButtonText>recuperar dados</ButtonText>
      </Button> */}
      <Button onPress={() => {}}>
        <ButtonText>Criar</ButtonText>
      </Button>
      {/* <Button onPress={() => removeAllValues()}>
        <ButtonText>Remover dados</ButtonText>
      </Button> */}
      {/* <Button
        onPress={() =>
          addToast({ message: "Turma criada com sucesso", type: "success" })
        }
      >
        <ButtonText>{onError ? "true" : "false"}</ButtonText>
      </Button> */}
    </Container>
  );
};
