import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import CalendarStrip from "react-native-calendar-strip";

const ScheduleScreen = ({ navigation, route }) => {

  const [currDate, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <CalendarStrip
        scrollable
        style={{ height: "14%", paddingTop: "5%", paddingBottom: "5%"}}
        calendarColor={"#004E64"}
        calendarHeaderStyle={{ color: "white" }}
        dateNumberStyle={{ color: "white" }}
        dateNameStyle={{ color: "white" }}
        highlightDateNameStyle={{color: "#9FFFCB"}}
        highlightDateNumberStyle={{color: "#9FFFCB"}}
        iconContainer={{ flex: 0.1}}
        onDateSelected={(date) => setDate(date)}
      />
      <Text>{currDate.toISOString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default ScheduleScreen;
