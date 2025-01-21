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
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export const InputsAuth = ({
  name,
  quantity,
  setName,
  setQuantity,
  isPressedName,
  setIsPressedName,
  isPressedQuantity,
  addFunction,
}: {
  name: string;
  quantity: string;
  setName: (name: string) => void;
  setQuantity: (quantity: string) => void;
  isPressedName: boolean;
  setIsPressedName: (isPressedName: boolean) => void;
  isPressedQuantity: boolean;
  addFunction: (item: any) => void;
}) => {
  const { isDarkMode } = useThemeStyled();
  return (
    <>
      <InputContainer
        style={[
          isPressedName && {
            borderColor: isDarkMode ? "#EFF3F7" : "#000",
          },
        ]}
      >
        <IconContainer style={{}}>
          <ProfileIcon></ProfileIcon>
        </IconContainer>
        <StyledInput
          onBlur={() => console.log("pressed")}
          onPress={() => {
            setIsPressedName(true);
          }}
          onChangeText={(text) => setName(text)}
          value={name}
          placeholderTextColor={
            isDarkMode ? darkTheme.colors.text : lightTheme.colors.text
          }
          placeholder="Nome do participante"
          style={{ color: isDarkMode ? "#EFF3F7" : "#000" }}
        />
        <Pressable
          style={{
            width: "13%",
            height: 50,
            backgroundColor: "#31cf67",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 7,
          }}
          onPress={addFunction}
        >
          <Feather
            name="plus"
            size={26}
            color={isDarkMode ? "#EFF3F7" : "#000"}
          />
        </Pressable>
      </InputContainer>
    </>
  );
};
