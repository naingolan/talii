import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './Home';
import Profile from './Profile';
import {View, Image, Text, TouchableOpacity, Dimensions} from 'react-native';
import Images from '../Utils/Image';
import Color from '../Utils/Color';
import Font from '../Utils/Font';
import Explore from './Explore';


const Tab = createBottomTabNavigator();

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            haderShown:false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 10,
                left: 10,
                right: 10,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 70,
            }
        }}
         >
              <Tab.Screen name="Home" component={Home} 
                options={{
                    headerShown:false,

                //   tabBarIconStyle:'none',
                  tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10,}}>
                      <Image 
                      source={focused?Images.home:Images.home_plain}
                      resizeMode = 'contain'
                      style={{
                        width:30,
                        height:30,
                        // tintColor: focused? Color.secondary:Color.secondary2
                      }}
                      />
                      <Text style={{color:focused?Color.secondary:Color.secondary2,fontSize:12, fontFamily:Font.semiBold}}>Home</Text>
                    </View>
                   ),
                }}
              />
              <Tab.Screen name="Explore" component={Explore} 
                options={{
                    headerShown:false,

                //   tabBarIconStyle:'none',
                  tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10,}}>
                      <Image 
                      source={focused?Images.tourism:Images.tourism_plain}
                      resizeMode = 'contain'
                      style={{
                        width:30,
                        height:30,
                        tintColor: focused? Color.secondary:Color.secondary2
                      }}
                      />
                      <Text style={{color:focused?Color.secondary:Color.secondary2,fontSize:12, fontFamily:Font.regular}}>Explore</Text>
                    </View>
                   ),
                }}
              />
              <Tab.Screen name="Profile" component={Profile} 
                options={{
                    headerShown:false,

                //   tabBarIconStyle:'none',
                  tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10,}}>
                      <Image 
                      source={focused?Images.profile:Images.profile_plain}
                      resizeMode = 'contain'
                      style={{
                        width:30,
                        height:30,
                        tintColor: focused? Color.secondary:Color.secondary2
                      }}
                      />
                      <Text style={{color:focused?Color.secondary:Color.secondary2,fontSize:12, fontFamily:Font.regular}}>Profile</Text>
                    </View>
                   ),
                }}
              />



                
 
        </Tab.Navigator>
    );
}
export  default Tabs;