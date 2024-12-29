import { useThemeStyled } from "@/hooks/useThemed";
import { Pressable, Text, View } from "react-native";
import { router, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import useBackHandler from "@/hooks/backHandler";

export const LoginButton = ({ routerPush }: { routerPush?: string }) => {
  const { isDarkMode } = useThemeStyled();
  const router = useRouter();
  const { removeBackHandler } = useBackHandler();
  return (
    <View style={{ flexDirection: "row", marginTop: 33 }}>
      <Text style={{ color: isDarkMode ? "#EFF3F7" : "#000", marginTop: 4 }}>
        Já possue uma conta?
      </Text>
      <Pressable
        onPress={() => {
          removeBackHandler();

          console.log("buttom cadastre-se");
          router.push("/");
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
          Faça login
        </Text>
      </Pressable>
    </View>
  );
};
