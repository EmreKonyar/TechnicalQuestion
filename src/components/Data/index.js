import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Data = (props) => {
  return (
    <View style={styles.container}>
      <Text style={[{marginLeft: props.marginLeft1}, {marginRight: props.marginRight1}]}>1</Text>
      <Text style={{marginRight: props.marginRight2}}>AdminUser</Text>
      <Text style={{marginRight: props.marginRight3}}>admin@piworks.net</Text>
      <Text>true</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 35,
        marginRight: 5,
    },
})

export default Data;