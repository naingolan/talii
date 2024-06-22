import React, { useState, useEffect  } from 'react';
import { View, Pressable,Dimensions, TextInput, Alert,Image,  StyleSheet, TouchableOpacity, Text, ImageBackground, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../Utils/Image';
import Colors from '../Utils/Color';
import Font from '../Utils/Font';
import Language from '../Language';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const LoginScreen = ({  }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [load, setLoad] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const activeLang = 'en'
    const navigation = useNavigation();
    const [wrongInfo, setWrongInfo] = useState({
         wrong: false,
         message: "" 
    })

    const login = async () => {
        if (username === '' || password === '') {
            setWrongInfo({ wrong: true, message: "Please fill all fields" });
            return;
        }

        try {
            const usersString = await AsyncStorage.getItem('users');
            const users = usersString ? JSON.parse(usersString) : [];
             console.log(users);

            const userIndex = users.findIndex(u => u.username === username);

            if (userIndex === -1) {
                setWrongInfo({ wrong: true, message: "User does not exist." });
                return;
            }

            const user = users[userIndex];

            if (user.password !== password) {
                setWrongInfo({ wrong: true, message: "Incorrect password." });
                return;
            }
            else {
                user.status = 'active';
                users[userIndex] = user;
                await AsyncStorage.setItem('users', JSON.stringify(users));
                navigation.navigate("Tabs");
                
            }
        } catch (error) {
            console.log(error);
            setWrongInfo({ wrong: true, message: "Failed to log in." });
        }
    };






    return (
        <ImageBackground source={Images.site_2} style={styles.container}>
        <View style={styles.container}>
            <View style={styles.coverContainer}>
               <Image source={Images.logo} style={styles.image} />
            </View>
            {wrongInfo.wrong && <Text style={{marginBottom:5, fontFamily:Font.bold, color:'red'}}>{wrongInfo.message}</Text> }  

            <TextInput
                style={styles.input}
                placeholderTextColor={Colors.primary}
                placeholder={Language("phone_number", activeLang)}
                onChangeText={text => setUsername(text)}
                value={username}
            />
            <View style={{justifyContent:'center',width:"100%",alignSelf:'center', alignItems:'center,'}}>
            <TextInput
                style={[styles.input,{margin:'auto'} ]}
                placeholderTextColor={Colors.primary}
                placeholder={Language("password", activeLang)}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry = {!showPassword}
            />


            <Pressable onPress={()=>login()} style={styles.login}>
                <Text style={{color:Colors.white, fontFamily:Font.bold, fontSize:20, margin:'auto'}}>Login</Text>
            </Pressable>

            <View>
                <Pressable onPress={()=>navigation.navigate('Register')} style={{margin:'auto',width:screenWidth*.6,flexDirection:'row',justifyContent:'center',marginTop:5}}>
                    <Text style={{color:Colors.white, fontFamily:Font.bold, fontSize:14, margin:'auto',marginRight:0 }}>Dont you have an account? </Text>
                    <Text style={{color:Colors.secondary, fontFamily:Font.bold, fontSize:14, margin:'auto', marginLeft:0, marginLeft:'auto'}}>Register</Text>
                </Pressable>

            </View>
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
        marginBottom: 200,
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
