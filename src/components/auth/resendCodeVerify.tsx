import { useThemeStyled } from "@/hooks/useThemed";
import { Pressable, Text, View } from "react-native";
import { router, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import useBackHandler from "@/hooks/backHandler";
import { useToast } from "@/contexts/Toast/ToastContext";

export const ResendCodeVerify = ({ routerPush }: { routerPush?: string }) => {
  const { isDarkMode } = useThemeStyled();
  const router = useRouter();
  const { addToast } = useToast();
  return (
    <View style={{ flexDirection: "row", marginTop: 33 }}>
      <Text style={{ color: isDarkMode ? "#EFF3F7" : "#000", marginTop: 4 }}>
        Não recebeu o código?
      </Text>
      <Pressable
        onPress={() => {
          addToast({
            type: "loading",
            message: "Código sendo reenviado...",
          });
          console.log("buttom cadastre-se");
          setTimeout(() => {
            addToast({
              type: "success",
              message: "Código reenviado com sucesso!",
            });
          }, 2000);
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
          Reenviar
        </Text>
      </Pressable>
    </View>
  );
};
