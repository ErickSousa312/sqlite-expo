import { useThemeStyled } from "@/hooks/useThemed";
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
      <Button onPress={() => {}}>
        <ButtonText>Criar</ButtonText>
      </Button>
    </Container>
  );
};
