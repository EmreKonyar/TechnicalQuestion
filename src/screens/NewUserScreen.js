import {React, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import InputBox from '../components/InputBox';
import DropDown from '../components/DropDown';
import CheckBox from '../components/CheckBox';
import Colors from '../components/Colors';

const NewUserScreen = ({navigation}) => {

  const [userStatus, setUserStatus] = useState(false)
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [phone, setPhone] = useState('');

  const saveUser = () => {
    const newUser = { userName, email, displayName, phone, userStatus };
    navigation.navigate('User', { newUser });
    setUserName('');
    setEmail('');
    setDisplayName('');
    setPhone('');
    setUserStatus(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>New User</Text>
        <TouchableOpacity onPress={saveUser}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Save User</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <InputBox marginRight={44} text={'Username:'} data={userName} setData={setUserName} />
        <InputBox marginRight={20} text={'Display Name:'} data={displayName} setData={setDisplayName} />
        <InputBox marginRight={69} text={'Phone:'} data={phone} setData={setPhone} />
        <InputBox marginRight={74} text={'Email:'} data={email} setData={setEmail}/>
        <DropDown marginRight={20} dropDownText={'User Roles:'}/>
        <CheckBox marginRight={60} flexDirection={'row'} text={'Enabled:'} status={userStatus} setStatus={setUserStatus} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    flex:1,
    backgroundColor:Colors.appColor2,
  },
  top:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.appColor3,
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
    backgroundColor: Colors.appColor1,
  },
  buttonText:{
    color: Colors.appColor2,
    fontWeight: 'bold',
  },
  bottom:{
    alignItems: 'flex-start',
    
  },
});

export default NewUserScreen;