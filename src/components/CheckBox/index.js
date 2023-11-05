import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Checkbox from 'expo-checkbox';
import Colors from '../Colors';

const CheckBox = ({flexDirection, marginLeft, marginRight, text, status, setStatus}) => {

  return (
    <View style={{flexDirection: flexDirection}}>
      <Text style={[styles.text, {marginLeft: marginLeft, marginRight: marginRight}]}>{text}</Text>
      <Checkbox value={status} onValueChange={(newValue) => setStatus(newValue)} color={Colors.appColor1}/>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
    },
});

export default CheckBox;