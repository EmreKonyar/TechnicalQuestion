import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const Colons = (props) => {
  return (
    <View style={[styles.container, {width: props.width}]}>
      <Text style={[styles.text, {marginRight: props.marginRight}]}>{props.text}</Text>
      <Ionicons name={props.icon1} size={20} color={'#fff'}/>
      <Ionicons name={props.icon2} size={20} color={'#fff'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 35,
        marginRight:3,
        backgroundColor: '#007cba',
    },
    text:{
        color: '#fff',
        fontWeight: 'bold',
        marginLeft:5,
        fontSize:12
    },
})

export default Colons;