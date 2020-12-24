import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {LogOutButton} from "../shared/LogoutButton";
import ScheduleScreen from './screens/ScheduleScreen';

const ScheduleStack = createStackNavigator();

const ScheduleNavigator = () => {
  return (
    <ScheduleStack.Navigator
      screenOptions={{
        headerTitle: "Schedule",
        headerTitleStyle: {fontFamily: 'Poppins_500Medium'},
        headerRight: () => {return <LogOutButton />}
      }}
    >
        <ScheduleStack.Screen name={"Schedule Screen"} component={ScheduleScreen}/>
    </ScheduleStack.Navigator>
  );
};

export default ScheduleNavigator;

