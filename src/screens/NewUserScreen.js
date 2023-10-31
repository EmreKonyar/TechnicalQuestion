import { View, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import React from 'react';
import InputBox from '../components/InputBox';
import DropDown from '../components/DropDown';
import CheckBox from '../components/CheckBox';

const NewUserScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>New User</Text>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Save User</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <InputBox marginRight={44} text={'Username:'}/>
        <InputBox marginRight={20} text={'Display Name:'} />
        <InputBox marginRight={69} text={'Phone:'} />
        <InputBox marginRight={74} text={'Email:'} />
        <DropDown marginRight={20} dropDownText={'User Roles:'}/>
        <CheckBox marginRight={60} flexDirection={'row'} text={'Enabled:'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    flex:1,
    backgroundColor:'#fff',
  },
  top:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    width: '100%',
    justifyContent:'space-around',
    marginBottom: 20,
  },
  topText:{
    fontWeight: 'bold',
    fontSize: 23,
    marginRight: 130,
  },
  button:{
    margin:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    width: 100,
    height: 35,
    backgroundColor: '#007cba',
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
  },
  bottom:{
    alignItems: 'flex-start',
    
  },
})

export default NewUserScreen;