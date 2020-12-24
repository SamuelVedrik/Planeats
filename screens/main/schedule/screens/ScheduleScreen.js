import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import CalendarSelector from '../components/CalendarSelector';
import FloatingAction from "../components/FloatingAction";

const ScheduleScreen = ({ navigation, route }) => {

  const [currDate, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <CalendarSelector onDateSelect={(date) => setDate(date)}/>
      {/* <Text>{currDate.toISOString()}</Text> */}
      <FloatingAction onPress={() => {navigation.navigate("Edit Schedule", {currDate: currDate.toISOString()})}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ScheduleScreen;
