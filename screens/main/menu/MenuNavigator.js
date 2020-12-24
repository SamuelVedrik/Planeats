import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {LogOutButton} from "../shared/LogoutButton";
import MenuScreen from './screens/MenuScreen';


const MenuStack = createStackNavigator();

const MenuNavigator = () => {
  return (
    <MenuStack.Navigator
      screenOptions={{
        headerTitle: "Menu",
        headerTitleStyle: {fontFamily: 'Poppins_500Medium'},
        headerRight: () => {return <LogOutButton />}
      }}
    >
        <MenuStack.Screen name={"Menu Screen"} component={MenuScreen}/>
    </MenuStack.Navigator>
  );
};

export default MenuNavigator;

