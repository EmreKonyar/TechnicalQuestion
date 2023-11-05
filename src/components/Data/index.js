import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Data = ({userName, email, id, checkbox}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.data1}>{id}</Text>
      <Text style={styles.data2}>{userName}</Text>
      <Text style={styles.data3}>{email}</Text>
      <Text style={styles.data4}>{checkbox}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        height: 35,
    },
    data1:{
      marginLeft: 9,
      width: 65,
    },
    data2:{
      width: 105,
    },
    data3:{
      width: 139,
    },
    data4:{
      marginLeft: 5,
      width: 100,
    },
})

export default Data;