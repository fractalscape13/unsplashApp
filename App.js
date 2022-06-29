import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './src/components/Header';
import List from './src/screens/List';
import Details from './src/screens/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerLeft: null,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#06070F',
          },
      }} >
        <Stack.Screen 
          name="List" 
          component={List}       
          options={{
            headerTitle: () => <Header home title={'Unsplashtastic'} />,
          }}
        />
        <Stack.Screen
          name="Details" 
          component={Details} 
          options={{
            headerTitle: () => <Header title={'Image Details'} />,
          }}  
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
