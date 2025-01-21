import { CardsCustomProps } from "@/@types/CardsCustomProps";
import React from "react";
import { View, Alert, ScrollView } from "react-native";
import { Text, ContainerCard, IconExclude, Text2 } from "./style";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ProductDatabase } from "@/db/useProductDatabase";

export const CardsProducts: React.FC<CardsCustomProps> = ({
  width,
  height,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  data,
  Icon,
  onPress,
  timeSelected,
  excludeFunction,
}) => {
  return (
    <ScrollView
      style={{
        width: width ? width : "91%",
        marginTop: marginTop ? marginTop : 0,
        marginLeft: marginLeft ? marginLeft : 0,
        marginRight: marginRight ? marginRight : 0,
        marginBottom: marginBottom ? marginBottom : 0,
      }}
    >
      {data?.length === 0 ? ( // Verifica se o array está vazio
        <Text2 style={{ textAlign: "center", fontSize: 15 }}>
          Ninguém chegou no evento ainda: Adicione participantes à sua lista de
          presença
        </Text2>
      ) : (
        data.map((item: ProductDatabase, index: number) => (
          <ContainerCard key={index}>
            <Text>{item.name}</Text>
            <IconExclude
              style={{
                width: "14%",
                height: "100%",
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 7,
              }}
              onPress={() => {
                Alert.alert(
                  "Deseja remover o Participante", // Título
                  "O usuário vai ser removido permantemente", // Mensagem
                  [
                    {
                      text: "Cancelar",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    { text: "OK", onPress: () => excludeFunction(item.id) },
                  ],
                  { cancelable: false },
                );
              }}
            >
              <AntDesign name="minus" size={24} color="white" />
            </IconExclude>
          </ContainerCard>
        ))
      )}
    </ScrollView>
  );
};
