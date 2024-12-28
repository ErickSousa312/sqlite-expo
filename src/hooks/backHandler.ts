import { useEffect } from "react";
import { BackHandler, Alert } from "react-native";

const useBackHandler = () => {
  const backAction = () => {
    Alert.alert("Confirmar saída", "Você tem certeza que quer sair?", [
      {
        text: "Cancelar",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  const removeBackHandler = () => {
    BackHandler.removeEventListener("hardwareBackPress", backAction);
  };

  const handleBackPress = () => {
    backAction();
    return true;
  };

  useEffect(() => {
    const backAction = () => {
      handleBackPress();
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => {
      console.log("Removendo o listener do BackHandler");
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    };
  }, []);

  return { removeBackHandler };
};

export default useBackHandler;
