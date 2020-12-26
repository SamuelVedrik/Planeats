import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LogOutButton } from "../shared/LogoutButton";
import MenuScreen from "./screens/MenuScreen";
import AddMenu from "./screens/AddMenu";

const MenuStack = createStackNavigator();

const MenuNavigator = () => {
  return (
    <MenuStack.Navigator
      mode="modal"
      screenOptions={{
        headerTitle: "Menu",
        headerTitleStyle: { fontFamily: "Poppins_500Medium" },
        headerRight: () => {
          return <LogOutButton />;
        },
      }}
    >
      <MenuStack.Screen name={"Menu Screen"} component={MenuScreen} />
      <MenuStack.Screen
        name={"Add Menu"}
        component={AddMenu}
        options={{
          headerTitle: "Add New Menu",
          headerLeft: null,
          headerRight: null,
        }}
      />
    </MenuStack.Navigator>
  );
};

export default MenuNavigator;
