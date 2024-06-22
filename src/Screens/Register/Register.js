import React, { useState, useEffect  } from 'react';
import { View, Pressable, TextInput, Alert,Image,  StyleSheet, TouchableOpacity, Text, ImageBackground, } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../Utils/Image';
import Colors from '../../Utils/Color';
import Font from '../../Utils/Font';
import Language from '../../Language';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = ({  }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [load, setLoad] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const activeLang = 'en'
    const navigation = useNavigation();





    return (
        <ImageBackground source={Images.site_2} style={styles.container}>
        <View style={styles.container}>
            <View style={styles.coverContainer}>
               <Image source={Images.logo} style={styles.image} />
            </View>

            <View style={{justifyContent:'center',width:"100%",alignSelf:'center', alignItems:'center,'}}>
            <Text style={{color:Colors.white, fontFamily:Font.bold, fontSize:14, marginLeft:40, marginVertical:20,}}>Register as</Text>

            {/* <Pressable onPress={()=>setShowPassword(!showPassword)} style={{position:'absolute',height:20, width:20, right:"15%", top:15}}>
                <Image source={showPassword?Images.eye:Images.eye_off} style={{height:20, width:20}} />
            </Pressable> */}

            <Pressable onPress={()=>navigation.navigate("Tourist")} style={styles.login}>
                <Text onPress={()=>navigation.navigate("TourGuide")}style={{color:Colors.white, fontFamily:Font.bold, fontSize:20, margin:'auto'}}>Visitor</Text>
            </Pressable>

            <Pressable onPress={()=>navigation.navigate("TourGuide")}  style={styles.login}>
                <Text style={{color:Colors.white, fontFamily:Font.bold, fontSize:20, margin:'auto'}}>Tour Guide</Text>
            </Pressable>
            

            </View>

        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
         height: '100%',
         width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    coverContainer: {
        marginTop:100,
        marginBottom: 150,
    },
    image:{
        width:160,
        height:70,
        resizeMode:'stretch'
    },
    input: {
        color:Colors.primary,
        fontFamily: Font.regular,
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: 'transparent', 
        elevation: 2, 
        // shadowColor: '#0C5E97', 
        // shadowOffset: {
        //   width: 2, 
        //   height: 4, 
        // },
        // shadowOpacity: 0.25, // Opacity of the shadow
        // shadowRadius: 4,
    },
    login:{
        width: '80%',
        height: 60,
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        margin:'auto',
        backgroundColor: Colors.secondary,

    }

});

export default LoginScreen;
