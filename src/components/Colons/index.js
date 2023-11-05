import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../Colors';

const Colons = (props) => {
  return (
    <View style={[styles.container, {width: props.width}]}>
      <Text style={[styles.text, {marginRight: props.marginRight}]}>{props.text}</Text>
      <Ionicons name={props.icon1} size={20} color={Colors.appColor2}/>
      <Ionicons name={props.icon2} size={20} color={Colors.appColor2}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 35,
        marginRight:3,
        backgroundColor: Colors.appColor1,
    },
    text:{
        color: Colors.appColor2,
        fontWeight: 'bold',
        marginLeft:5,
        fontSize:12
    },
});

export default Colons;