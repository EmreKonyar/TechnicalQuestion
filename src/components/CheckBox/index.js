import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

const CheckBox = (props) => {

 const [Checked, setChecked] = useState(false);

  return (
    <View style={{flexDirection: props.flexDirection}}>
      <Text style={[styles.text, {marginLeft: props.marginLeft, marginRight: props.marginRight}]}>{props.text}</Text>
      <Checkbox value={Checked} onValueChange={setChecked} color='#007cba'/>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
    },
})

export default CheckBox;