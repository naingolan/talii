import React, { useState, useEffect  } from 'react';
import { View, Pressable,Dimensions, TextInput, Alert,Image,  StyleSheet, TouchableOpacity, Text, ImageBackground, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../Utils/Image';
import Colors from '../../Utils/Color';
import Font from '../../Utils/Font';
import Language from '../../Language';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Tourist = ({  }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [load, setLoad] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const activeLang = 'en'
    const navigation = useNavigation();


    const [wrongInfo, setWrongInfo] = useState({ wrong: false, message: '' });


    const saveUserToStorage = async (newUser) => {
        try {
            const usersString = await AsyncStorage.getItem('users');
            let users = usersString ? JSON.parse(usersString) : [];

            // Check if the user already exists
            const userExists = users.some(user => user.username === newUser.username);
            if (userExists) {
                setWrongInfo({ wrong: true, message: "User already exists." });
                return;
            }

            // Add the new user to the list
            users.push(newUser);
            await AsyncStorage.setItem('users', JSON.stringify(users));
            navigation.navigate("Tabs")
           // Alert.alert("Success", "User data saved successfully!");
        } catch (error) {
            console.log(error);
            setWrongInfo({ wrong: true, message: "Failed to save user data." });
           // Alert.alert("Error", "Failed to save user data.");
        }
    };

    const register = () => {
        console.log("Ayee captain");
        setWrongInfo({ wrong: false, message: '' });
        console.log("Login");

        if (username === '' || password === '') {
            setWrongInfo({ wrong: true, message: "Please fill all fields" });
        }else if(password !== confirmPassword){
            setWrongInfo({ wrong: true, message: "Password and Confirm Password does not match" });
        }else {
            setTimeout(() => {
                const user = {
                    username: username,
                    password: password,
                    type: 'visitor',
                    status: 'active',
                };
                saveUserToStorage(user);
            }, 2000);
        }
    };







    return (
        <ImageBackground source={Images.site_2} style={styles.container}>
        <View style={styles.container}>
            <View style={styles.coverContainer}>
               <Image source={Images.logo} style={styles.image} />
            </View>
            <Text style={{color:Colors.white, fontFamily:Font.bold, fontSize:14, marginLeft:0, marginVertical:20,}}>Register as a Visitor</Text>
            {wrongInfo.wrong && <Text style={{marginBottom:5, fontFamily:Font.bold, color:'red'}}>{wrongInfo.message}</Text> }  


            <TextInput
                style={styles.input}
                placeholderTextColor={Colors.primary}
                placeholder={Language("username", activeLang)}
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
                <TextInput
                style={[styles.input,{margin:'auto'} ]}
                placeholderTextColor={Colors.primary}
                placeholder={Language("confirmPassword", activeLang)}
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry = {!showPassword}
            />


            <Pressable onPress={()=>register()} style={styles.login}>
                <Text style={{color:Colors.white, fontFamily:Font.bold, fontSize:20, margin:'auto'}}>Register</Text>
            </Pressable>

            <View>
                <Pressable onPress={()=>navigation.navigate('Login')} style={{margin:'auto',width:screenWidth*.4,flexDirection:'row',justifyContent:'center',marginTop:5}}>
                    <Text style={{color:Colors.white, fontFamily:Font.bold, fontSize:14, margin:'auto',marginRight:0 }}>Have an account? </Text>
                    <Text style={{color:Colors.secondary, fontFamily:Font.bold, fontSize:14, margin:'auto', marginLeft:0, marginLeft:'auto'}}>Login</Text>
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
        marginBottom: 100,
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

export default Tourist;
