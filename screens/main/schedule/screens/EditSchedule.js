import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EditSchedule = ({navigation, route}) => {

    return (
        <View style={styles.container}> 
            <Text>{route.params.currDate}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

export default EditSchedule;

  