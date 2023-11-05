import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreen from '../screens/UserScreen';
import NewUserScreen from '../screens/NewUserScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,}}>
        <Stack.Screen  name='User' component={UserScreen}/>
        <Stack.Screen name='newUser' component={NewUserScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator;