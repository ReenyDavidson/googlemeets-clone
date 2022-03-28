import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import JoinScreen from "../screens/JoinScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings";
            }
            if (route.name === "Home") {
              size = focused ? 18 : 16;
            } else if (route.name === "Settings") {
              size = focused ? 16 : 15;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          drawerLabelStyle: {
            fontFamily: "Poppins-Regular",
            fontSize: 16,
          },
          drawerType: "back",
          drawerContentContainerStyle: {
            top: 40,
          },
          drawerPosition: "left",
        })}
      >
        <Drawer.Screen
          name="Home"
          component={JoinScreen}
          options={{
            headerTitle: "Conf.",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Poppins-Medium",
              fontSize: 22,
              color: "#2196F3",
            },
            headerStyle: {
              elevation: 0,
              backgroundColor: "#fff",
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
