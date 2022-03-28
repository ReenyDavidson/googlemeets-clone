import React from "react";
import { NativeBaseProvider, extendTheme, StatusBar } from "native-base";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";
import DrawerNavigation from "./navigation/DrawerNavigation";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider>
      <DrawerNavigation />
      <StatusBar
        barStyle={theme.dark ? "light-content" : "dark-content"}
        backgroundColor={theme.dark ? "#000" : "#fff"}
      />
    </NativeBaseProvider>
  );
}

// Color Switch Component
{
  /* function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={colorMode === "light" ? "switch to dark mode" : "switch to light mode"}
      />
      <Text>Light</Text>
    </HStack>
  );
  */
}
