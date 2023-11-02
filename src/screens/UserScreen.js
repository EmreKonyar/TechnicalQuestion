import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'
import Colons from '../components/Colons';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '../components/CheckBox';
import Data from '../components/Data';
import Colors from '../components/Colors';

const UserScreen = () => {

const [Checked, setChecked] = useState(false);

const navigation = useNavigation();

  return (
    <View style={styles.container}>

    <ScrollView
    contentContainerStyle={{
        flexGrow: 1
    }}
    keyboardShouldPersistTaps= 'handled'
    >

    <View style={styles.top}>
      <TouchableOpacity onPress={()=>navigation.navigate('newUser')}>
          <View style={styles.newu}>
              <Ionicons name='add-outline' size={20} color={Colors.appColor2} />
              <Text style={styles.newuText}>New User</Text>
          </View>
      </TouchableOpacity>
      <CheckBox flexDirection={'row-reverse'} marginLeft={5} text={'Hide Disabled User'}/>
    </View>
    <View style={styles.colonsStyle}>
        <Colons width={65} marginRight={0} text={'ID'} icon1={'caret-up-outline'} icon2={'flashlight-outline'}/>
        <Colons width={105} marginRight={0} text={'User Name'} icon1={'caret-up-outline'} icon2={'flashlight-outline'}/>
        <Colons width={139} marginRight={30} text={'Email'} icon1={'caret-up-outline'} icon2={'flashlight-outline'}/>
        <Colons width={100} marginRight={0} text={'Enabled'} icon1={'caret-up-outline'} icon2={'flashlight-outline'}/>    
    </View>
    <View style={styles.data}>
    <Data marginLeft1={50} marginRight1={15} marginRight2={40} marginRight3={18}/>
    <Data marginLeft1={50} marginRight1={15} marginRight2={40} marginRight3={18}/>
    </View>
    </ScrollView>
  </View>
  )
}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex:1,
        backgroundColor: Colors.appColor2
    },
    top:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.appColor3,
        width: '100%',
    },
    newu:{
        margin:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        width: 100,
        height: 35,
        backgroundColor: Colors.appColor1,
    },
    newuText:{
        color: Colors.appColor2,
        fontWeight: 'bold',
    },
    colonsStyle:{
        flexDirection: 'row',
        width: '100%',
        marginTop: 15,
    },
    data:{
        flexDirection: 'column',
        width: '100%',
    },
    
})



export default UserScreen