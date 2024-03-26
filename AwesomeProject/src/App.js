import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Login from './pages/auth/Login/Login';
import Sign from './pages/auth/Sign/Sign';

const Stack = createNativeStackNavigator();

const App = () => {
  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
