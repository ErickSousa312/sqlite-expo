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
  Title2,
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
import Api from "@/services/Api";
import urls from "@/services/urls";
import { useToast } from "@/contexts/Toast/ToastContext";
import { CardsProducts } from "@/components/cards/cardProducts";
import {
  ProductDatabase,
  useProductDatabase,
} from "../../db/useProductDatabase";

export const HomeScreen = () => {
  const { isDarkMode } = useThemeStyled();
  const [isPressedNameProduct, setPressedname] = useState(false);
  const [isPressedQuantity, setPressedQuantity] = useState(false);
  const [dataProducts, setDataProducts] = useState<ProductDatabase[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const { login, isAuthenticated } = useAuthCustom();
  const { addToast } = useToast();
  const { create, readAll, remove } = useProductDatabase();

  const handleDismissKeyboard = () => {
    setPressedname(false);
    setPressedQuantity(false);
    Keyboard.dismiss();
  };

  const route = useRouter();
  const { removeBackHandler } = useBackHandler();

  const createProduct = async () => {
    try {
      if (Number(quantity) < 0) {
        addToast({ type: "error", message: "Quantity must be greater than 0" });
      }
      addToast({
        type: "loading",
        message: "Creating product...",
      });
      const result = await create({ name: name, quantity: Number(quantity) });
      addToast({
        type: "success",
        message: "Product created successfully",
      });
      console.log("resulto do home", result);
      setName("");
      getData();
    } catch (error) {
      addToast({ type: "error", message: "Error creating product" });
    }
  };
  const delectFunction = async (id: any) => {
    try {
      addToast({
        type: "loading",
        message: "Apagando participante...",
      });
      const result = await remove(id);
      addToast({
        type: "success",
        message: "Participante foi removido com sucesso",
      });
      console.log("entrou aqui ");
      console.log("resulto do home", result);
      setName("");
      getData();
    } catch (error) {
      addToast({ type: "error", message: "Erro ao remover o participante" });
    }
  };

  async function getData() {
    const response = await readAll();
    setDataProducts(response);
    console.log("dados do response do banco de dados", response);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <Container>
        <>
          <View
            style={{
              width: "100%",
              paddingLeft: 20,
              height: 100,
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Title style={{ marginTop: 45 }}>Nome do Evento</Title>
            <SubTitle style={{ marginBottom: 30 }}>
              Sexta, 4 de novembro de 2022
            </SubTitle>
          </View>

          <InputsAuth
            name={name}
            quantity={quantity}
            setName={setName}
            setQuantity={setQuantity}
            isPressedQuantity={isPressedQuantity}
            setIsPressedName={setPressedname}
            isPressedName={isPressedNameProduct}
            addFunction={createProduct}
          ></InputsAuth>
          <View
            style={{
              width: "100%",
              paddingLeft: 20,
              marginTop: 20,
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Title2 style={{}}>Participantes</Title2>
          </View>

          {/* <Button onPress={() => createProduct()}>
            <ButtonText>Acessar</ButtonText>
          </Button>
          <Button onPress={() => getData()}>
            <ButtonText>Acessar</ButtonText>
          </Button>
          <RegisterButton></RegisterButton> */}

          <CardsProducts
            excludeFunction={delectFunction}
            data={dataProducts}
          ></CardsProducts>
        </>
      </Container>
    </TouchableWithoutFeedback>
  );
};
