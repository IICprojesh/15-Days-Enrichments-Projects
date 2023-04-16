import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './components/screens/Home/Home';
import Details from './components/screens/Details/Details';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from './components/screens/splash_screen/SplashScreen';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [splash, setSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 4000)
  }, [])
  const stack = createNativeStackNavigator()
  const stackBottom = createBottomTabNavigator()

  if (splash) {
    return (
      <SplashScreen />
    )
  } else {
    return (
      <NavigationContainer>
        <stackBottom.Navigator>
          <stackBottom.Screen name='Home' component={Home} options={{
            tabBarIcon: () => {
              return <BottomIcons name="home-outline" />
            }
          }} />
          <stackBottom.Screen name='Users' component={Details} options={{
            tabBarIcon: () => {
              return <BottomIcons name="person-outline" />
            }
          }} />
        </stackBottom.Navigator>
        <StatusBar />
      </NavigationContainer>
    );
  }
}

const BottomIcons = (props) => {
  return <Ionicons name={props.name} size={20} />
}

export default App