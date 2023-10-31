import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, Platform } from 'react-native'
import React from 'react'

const InputBox = (props) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.texInput}
      >
        <Text style={[styles.text, {marginRight: props.marginRight}]}>{props.text}</Text>
        <TextInput style={styles.input}  />
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        
    },
    texInput:{
        flexDirection:'row',
        alignItems:'center',
    },
    text:{
        fontWeight: 'bold',
        fontSize: 15,
    },
    input:{
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        width: 250,
    }
})

export default InputBox;