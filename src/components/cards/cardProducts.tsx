// src/components/CardsCustom.tsx
import { CardsCustomProps } from "@/@types/CardsCustomProps";
import React from "react";
import {
  View,
  ViewStyle,
  StyleProp,
  DimensionValue,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text, ContainerCard, IconExclude } from "./style";
import GroupIcon from "../svgs/groupIcon";
import { useRouter } from "expo-router";
import { PeopleType } from "@/@types/MemberType";
import ExcludeIcon from "../svgs/excludeIcon";
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
      {data?.map((item: ProductDatabase, index: number) => (
        <ContainerCard key={index}>
          {Icon ? <Icon /> : <GroupIcon></GroupIcon>}
          <Text>{item.name}</Text>
          <IconExclude
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
                { cancelable: false }, // O alerta pode ser ignorado clicando fora dele?
              );
            }}
          >
            <ExcludeIcon />
          </IconExclude>
        </ContainerCard>
      ))}
    </ScrollView>
  );
};
