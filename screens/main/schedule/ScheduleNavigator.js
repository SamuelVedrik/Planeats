import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {LogOutButton} from "../shared/LogoutButton";
import ScheduleScreen from './screens/ScheduleScreen';
import EditSchedule from "./screens/EditSchedule";

const ScheduleStack = createStackNavigator();

const ScheduleNavigator = () => {
  return (
    <ScheduleStack.Navigator
      mode="modal"
      screenOptions={{
        headerTitle: "Schedule",
        headerTitleStyle: {fontFamily: 'Poppins_500Medium'},
        headerRight: () => {return <LogOutButton />}

      }}
    >
        <ScheduleStack.Screen name={"Schedule Screen"} component={ScheduleScreen}/>
        <ScheduleStack.Screen name={"Edit Schedule"} component={EditSchedule}
        options={{
          headerTitle: "Add Schedule",
          headerLeft: null,
          headerRight: null
        }}/>
    </ScheduleStack.Navigator>
  );
};

export default ScheduleNavigator;

