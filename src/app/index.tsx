import { HomeScreen } from "@/screens/home/home";
import { Platform, StyleSheet, useColorScheme, View } from "react-native";
import Constants from "expo-constants";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StatusBar } from "expo-status-bar";
import WebView from "react-native-webview";

export default function Home() {
  const disablePinchZoomScript = `
  const metaTag = document.createElement('meta');
  metaTag.setAttribute('name', 'viewport');
  metaTag.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  document.head.appendChild(metaTag);
`;

  const statusBarHeight = getStatusBarHeight();
  const platform = Platform.OS;
  const systemTheme = useColorScheme();

  console.log(statusBarHeight);
  console.log(platform);
  console.log(systemTheme);

  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: platform === "ios" ? statusBarHeight + 6 : 0,
          backgroundColor: systemTheme === "light" ? "#fff" : "#000",
        },
      ]}
    >
      <StatusBar
        style={systemTheme === "light" ? "dark" : "light"}
        backgroundColor={systemTheme === "light" ? "#fff" : "#000"}
      />
      <WebView
        injectedJavaScript={disablePinchZoomScript}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={false}
        style={styles.container}
        source={{ uri: "https://sushiexpresso.com.br/pedido-online" }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
