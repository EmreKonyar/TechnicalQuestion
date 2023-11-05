import {React, useState, useEffect }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'
import Colons from '../components/Colons';
import CheckBox from '../components/CheckBox';
import Data from '../components/Data';
import Colors from '../components/Colors';

const UserScreen = () => {

  const [enabled, setEnabled] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const [users, setUsers] = useState([]);

  useEffect(() => {
   if (route.params && route.params.newUser) {     
    setUsers([...users, route.params.newUser]);
    }
  }, [route.params]);
    
  const completeTask = (index) => {
   let dataCopy = [...users];
   dataCopy.splice(index,1)
   setUsers(dataCopy);
  }

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
            <View style={styles.topItems}>
              <Ionicons name='add-outline' size={20} color={Colors.appColor2} />
              <Text style={styles.topItemsText}>New User</Text>
            </View>
          </TouchableOpacity>
          <CheckBox flexDirection={'row-reverse'} marginLeft={5} text={'Hide Disabled User'} status={enabled} setStatus={setEnabled}/>
        </View>
        <View style={styles.colonsStyle}>
          <Colons width={65} marginRight={0} text={'ID'} icon1={'caret-up-outline'} icon2={'flashlight-outline'}/>
          <Colons width={105} marginRight={0} text={'User Name'} icon1={'caret-up-outline'} icon2={'flashlight-outline'}/>
          <Colons width={139} marginRight={30} text={'Email'} icon1={'caret-up-outline'} icon2={'flashlight-outline'}/>
          <Colons width={100} marginRight={0} text={'Enabled'} icon1={'caret-up-outline'} icon2={'flashlight-outline'}/>    
        </View>
        <View style={styles.data}>
          {
            users
            .filter(user => !enabled || user.userStatus) // Eğer enabled false ise veya userStatus true ise kullanıcıyı göster
            .map((user, index) => (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Data
                  key={index}
                  id={index + 1}
                  userName={user.userName}
                  email={user.email}
                  checkbox={user.userStatus ? 'true' : 'false'}
                />
              </TouchableOpacity>
            ))
          }  
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
    topItems:{
        margin:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        width: 100,
        height: 35,
        backgroundColor: Colors.appColor1,
    },
    topItemsText:{
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