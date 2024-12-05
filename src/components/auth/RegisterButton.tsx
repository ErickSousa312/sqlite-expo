import { useThemeStyled } from "@/hooks/useThemed";
import { Pressable, Text, View } from "react-native";

export const RegisterButton = ({ routerPush }: { routerPush?: string }) => {
  const { isDarkMode } = useThemeStyled();
  return (
    <View style={{ flexDirection: "row", marginTop: 33 }}>
      <Text style={{ color: isDarkMode ? "#EFF3F7" : "#000", marginTop: 4 }}>
        Não possue uma conta?
      </Text>
      <Pressable
        onPress={() => {
          console.log("buttom cadastre-se");
        }}
      >
        <Text
          style={{
            color: "#00875F",
            marginLeft: 5,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Cadastre-se
        </Text>
      </Pressable>
    </View>
  );
};
