import React from 'react';
import CalendarStrip from "react-native-calendar-strip";

const CalendarSelector = ({onDateSelect}) => {
    return (
    <CalendarStrip
        scrollable
        style={{ height: "11%", paddingTop: "2%", paddingBottom: "5%"}}
        calendarColor={"#004E64"}
        calendarHeaderStyle={{ color: "white", fontFamily: "Poppins_500Medium", marginBottom: "1%"}}
        dateNumberStyle={{ color: "white" }}
        dateNameStyle={{ color: "white", fontFamily: 'Poppins_500Medium'}}
        highlightDateNameStyle={{color: "#9FFFCB"}}
        highlightDateNumberStyle={{color: "#9FFFCB"}}
        iconContainer={{ flex: 0.1}}
        onDateSelected={onDateSelect}
        startingDate={new Date()}
        selectedDate={new Date()}
      />)
}

export default CalendarSelector;