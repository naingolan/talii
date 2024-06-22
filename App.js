import React, { useState, useEffect } from 'react';
import { useColorScheme, Image , View,Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Images from './src/Utils/Image';
import Home from './src/Screens/Home';
import Splash from './src/Screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/Screens/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Color from './src/Utils/Color';
import Register from './src/Screens/Register/Register';
const Stack = createNativeStackNavigator();
import Tabs from './src/Screens/Tabs';
import Login from './src/Screens/Login';
import Tourist from './src/Screens/Register/Tourist';
import TourGuide from './src/Screens/Register/TourGuide';
import SingleSite from './src/Screens/SingeSite';
import TourGuide2 from './src/Screens/Register/TourGuide2';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isSplashFinished, setIsSplashFinished] = useState(false);
  const [initialRoute, setInitialRoute] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

}, []);



useEffect(() => {
  setTimeout(() => {
    setIsSplashFinished(true);
  }, 2000);

  const checkActiveAccount = async () => {
    try {
        const usersString = await AsyncStorage.getItem('users');
        const users = usersString ? JSON.parse(usersString) : [];
        const activeUser = users.find(user => user.status === 'active');

        if (activeUser) {
           console.log("Going to tabs");
           setIsLoggedIn(true);
            //setInitialRoute('Tabs'); // Navigate to Tabs screen if an active account is found
        } else {

           console.log("Going to login");
           setIsLoggedIn(false);
            //setInitialRoute('Login'); // Navigate to Login screen if no active account is found
        }
    } catch (error) {
        console.error('Failed to check active account:', error);
        setInitialRoute('Login'); // Default to Login screen on error
    }
};

checkActiveAccount();


}, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   <NavigationContainer>
    {isSplashFinished?(
      isLoggedIn?(
          <Stack.Navigator >
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false, tabBarVisible:false }} />
          <Stack.Screen name="TourGuide2" component={TourGuide2} options={{headerShown:false, tabBarVisible:false}}/>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false, tabBarVisible:false }} />  

          <Stack.Screen name="Register" component={Register} options={{headerShown:false, tabBarVisible:false}}/>
          <Stack.Screen name="Tourist" component={Tourist} options={{headerShown:false, tabBarVisible:false}}/>
          <Stack.Screen name="TourGuide" component={TourGuide} options={{headerShown:false, tabBarVisible:false}}/> 
          <Stack.Screen name="SingleSite" component={SingleSite} options={{ headerShown: false, tabBarVisible:false }} />
         </Stack.Navigator>
      ):(
        <Stack.Navigator >
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false, tabBarVisible:false }} /> 
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false, tabBarVisible:false }} />
          <Stack.Screen name="TourGuide2" component={TourGuide2} options={{headerShown:false, tabBarVisible:false}}/>
          <Stack.Screen name="Register" component={Register} options={{headerShown:false, tabBarVisible:false}}/>
          <Stack.Screen name="Tourist" component={Tourist} options={{headerShown:false, tabBarVisible:false}}/>
          <Stack.Screen name="TourGuide" component={TourGuide} options={{headerShown:false, tabBarVisible:false}}/> 
          <Stack.Screen name="SingleSite" component={SingleSite} options={{ headerShown: false, tabBarVisible:false }} />
 
        </Stack.Navigator >

      ) 

      ):(
        <Splash/>
      )}




    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
})
export default App;
