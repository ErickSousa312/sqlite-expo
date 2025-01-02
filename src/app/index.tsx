import { HomeScreen } from "@/screens/home/home";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";
import Constants from "expo-constants";

export default function Home() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "https://horizontecnologia.com.br/gestor/login.php" }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
});
