import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import MenuNavigator from './menu/MenuNavigator';
import ScheduleNavigator from './schedule/ScheduleNavigator';


const MainTab = createBottomTabNavigator();

const MainNavigator = () => {
    return (<MainTab.Navigator
        screenOptions={({route})=>({
            tabBarIcon: ({color, size}) => {
                let iconName;
                switch (route.name) {
                    case "Menu":
                        iconName = "restaurant-menu";
                        break;
                    case "Schedule":
                        iconName = "calendar-today";
                        break;
                }
                return <MaterialIcons name={iconName} color={color} size={32} />
            }
        })}
        tabBarOptions={{
            activeTintColor: "#9FFFCB",
            inactiveTintColor: "#004E64",
            activeBackgroundColor: "#004E64",
            inactiveBackgroundColor: "white",
            tabStyle: {paddingBottom: "3%"},
            style: {height:"10%"},
            safeAreaInsets: { bottom: 0 },
            showLabel: false,
        }}
    >
        <MainTab.Screen name={"Schedule"} component={ScheduleNavigator}/>
        <MainTab.Screen name={"Menu"} component={MenuNavigator}/>
    </MainTab.Navigator>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default MainNavigator;
