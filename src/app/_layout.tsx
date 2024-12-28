import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProviderStyled } from "@/contexts/Theme/ThemeProvider";
import { ToastProvider } from "@/contexts/Toast/ToastContext";
import { AuthProvideCustom } from "@/contexts/auth/AuthProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const path = usePathname().replace(/^\//, "");
  console.log(path);

  return (
    <ThemeProviderStyled>
      <ToastProvider>
        <AuthProvideCustom>
          <GestureHandlerRootView>
            <Stack
              screenOptions={{
                headerShown: false,
                animationTypeForReplace: "push",
              }}
              initialRouteName={"index"}
            >
              <Stack.Screen
                name="index"
                options={{ animation: "slide_from_left" }}
              />
              <Stack.Screen
                name="class/editClass"
                options={{ animation: "slide_from_right" }}
              />
              <Stack.Screen
                name="createClass"
                options={{ animation: "slide_from_right" }}
              />
              <Stack.Screen
                name="register"
                options={{ animation: "slide_from_right" }}
              />
            </Stack>
          </GestureHandlerRootView>
        </AuthProvideCustom>
      </ToastProvider>
    </ThemeProviderStyled>
  );
}
