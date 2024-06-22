import React, { useState, useEffect  } from 'react';
import { View, Pressable,Dimensions, TextInput, Alert,Image,  StyleSheet, TouchableOpacity, Text, ImageBackground, ScrollView,KeyboardAvoidingView } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../Utils/Image';
import Colors from '../../Utils/Color';
import Font from '../../Utils/Font';
import Language from '../../Language';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';

const TourGuide2 = ({  }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [companyName, setCompanyName] = useState('');

    const [load, setLoad] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const activeLang = 'en'
    const navigation = useNavigation();
    const data = useRoute().params;
    const {previousData} = data;
    
    console.log(previousData);

    const [ngrngr, setNgrngr] = useState(false);
    const [tarangire, setTarangire] = useState(false);
    const [serengeti, setSerengeti] = useState(false);
    const [katavi, setKatavi] = useState(false);
    const [mikumi, setMikumi] = useState(false);
    const [ruaha, setRuaha] = useState(false);
    const [manyara, setManyara] = useState(false);


    const [wrongInfo, setWrongInfo] = useState({ wrong: false, message: '' });


    const saveUserToStorage = async (newUser) => {
        try {
            const usersString = await AsyncStorage.getItem('users');
            let users = usersString ? JSON.parse(usersString) : [];

            const userExists = users.some(user => user.username === newUser.username);
            if (userExists) {
                setWrongInfo({ wrong: true, message: "User already exists." });
                return;
            }

            users.push(newUser);
            await AsyncStorage.setItem('users', JSON.stringify(users));
            navigation.navigate("Tabs");
           // Alert.alert("Success", "User data saved successfully!");
        } catch (error) {
            console.log(error);
            setWrongInfo({ wrong: true, message: "Failed to save user data." });
        }
    };

    const register = () => {
        console.log("Ayee captain");
        setWrongInfo({ wrong: false, message: '' });
        console.log("Login");

        if(companyName === ''){
            setWrongInfo({ wrong: true, message: "Please fill all fields" });
        }else if(password !== confirmPassword){
            setWrongInfo({ wrong: true, message: "Password and Confirm Password does not match" });
        }else {
            setTimeout(() => {
                const user = {
                    username: previousData.username,
                    email: previousData.email,
                    phone: previousData.phone,
                    address: previousData.address,
                    password: previousData.password,
                    type: 'tour_guide',
                    status: 'active',
                    companyName: companyName,
                    sites: {
                        ngorongoro: ngrngr,
                        serengeti: serengeti,
                        tarangire: tarangire,
                        manyara: manyara,
                        ruaha: ruaha,
                        mikumi: mikumi,
                        katavi: katavi,
                    }
                };
                console.log(user);

                saveUserToStorage(user);
            }, 2000);
        }
    };

    return (
        <ImageBackground source={Images.site_2} style={styles.container}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{width:screenWidth}}
        >
        <View style={styles.container}>
            <View style={styles.coverContainer}>
               <Image source={Images.logo} style={styles.image} />
            </View>
            <Text style={{color:Colors.white, fontFamily:Font.bold, fontSize:14, marginLeft:0, marginVertical:20,}}>Register as a Tour Guide</Text>

            {wrongInfo.wrong && <Text style={{marginBottom:5, fontFamily:Font.bold, color:'red'}}>{wrongInfo.message}</Text> }  

            <TextInput
                style={styles.input}
                placeholderTextColor={Colors.primary}
                placeholder={Language("companyName", activeLang)}
                onChangeText={text => setCompanyName(text)}
                value={companyName}
            />

            <Text style={{alignSelf:'flex-start',color:Colors.white, fontFamily:Font.bold, fontSize:14, marginLeft:40, marginVertical:5,}}>Sites of Operation</Text>
            <View style={{justifyContent:'center',width:"100%",alignSelf:'center', alignItems:'center,'}}>
            <View style={{flexDirection:'row',marginLeft:60,}}>
                <Pressable onPress={()=>setNgrngr(!ngrngr)} style={{marginHorizontal:5, borderWidth:1,borderColor:Colors.white,backgroundColor:'rgba(0, 0, 0, 0.0)',justifyContent:'center',height:15, width:15,  }}>
                    <View style={{margin:'auto', height:10, width:10, backgroundColor:ngrngr?Colors.secondary:'rgba(0, 0, 0, 0.0)'}}/>  
                </Pressable>
                <Text style={{marginBottom:5,alignSelf:'center',marginVertical:'auto',color:Colors.white,}}>Ngorongoro Conversation</Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:60,}}>
                <Pressable onPress={()=>setSerengeti(!serengeti)} style={{marginHorizontal:5, borderWidth:1,borderColor:Colors.white,backgroundColor:'rgba(0, 0, 0, 0.0)',justifyContent:'center',height:15, width:15,  }}>
                    <View style={{margin:'auto', height:10, width:10, backgroundColor:serengeti?Colors.secondary:'rgba(0, 0, 0, 0.0)'}}/>  
                </Pressable>
                <Text style={{marginBottom:5,alignSelf:'center',marginVertical:'auto',color:Colors.white,}}>Serengeti National Park'</Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:60,}}>
                <Pressable onPress={()=>setTarangire(!tarangire)} style={{marginHorizontal:5, borderWidth:1,borderColor:Colors.white,backgroundColor:'rgba(0, 0, 0, 0.0)',justifyContent:'center',height:15, width:15,  }}>
                    <View style={{margin:'auto', height:10, width:10, backgroundColor:tarangire?Colors.secondary:'rgba(0, 0, 0, 0.0)'}}/>  
                </Pressable>
                <Text style={{marginBottom:5,alignSelf:'center',marginVertical:'auto',color:Colors.white,}}>Tarangire National Park</Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:60,}}>
                <Pressable onPress={()=>setManyara(!manyara)} style={{marginHorizontal:5, borderWidth:1,borderColor:Colors.white,backgroundColor:'rgba(0, 0, 0, 0.0)',justifyContent:'center',height:15, width:15,  }}>
                    <View style={{margin:'auto', height:10, width:10, backgroundColor:manyara?Colors.secondary:'rgba(0, 0, 0, 0.0)'}}/>  
                </Pressable>
                <Text style={{marginBottom:5,alignSelf:'center',marginVertical:'auto',color:Colors.white,}}>Lake Manyara National Park</Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:60,}}>
                <Pressable onPress={()=>setRuaha(!ruaha)} style={{marginHorizontal:5, borderWidth:1,borderColor:Colors.white,backgroundColor:'rgba(0, 0, 0, 0.0)',justifyContent:'center',height:15, width:15,  }}>
                    <View style={{margin:'auto', height:10, width:10, backgroundColor:ruaha?Colors.secondary:'rgba(0, 0, 0, 0.0)'}}/>  
                </Pressable>
                <Text style={{marginBottom:5,alignSelf:'center',marginVertical:'auto',color:Colors.white,}}>Ruaha National Park</Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:60,}}>
                <Pressable onPress={()=>setMikumi(!mikumi)} style={{marginHorizontal:5, borderWidth:1,borderColor:Colors.white,backgroundColor:'rgba(0, 0, 0, 0.0)',justifyContent:'center',height:15, width:15,  }}>
                    <View style={{margin:'auto', height:10, width:10, backgroundColor:mikumi?Colors.secondary:'rgba(0, 0, 0, 0.0)'}}/>  
                </Pressable>
                <Text style={{marginBottom:5,alignSelf:'center',marginVertical:'auto',color:Colors.white,}}>Mikumi National Park</Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:60,}}>
                <Pressable onPress={()=>setKatavi(!katavi)} style={{marginHorizontal:5, borderWidth:1,borderColor:Colors.white,backgroundColor:'rgba(0, 0, 0, 0.0)',justifyContent:'center',height:15, width:15,  }}>
                    <View style={{margin:'auto', height:10, width:10, backgroundColor:katavi?Colors.secondary:'rgba(0, 0, 0, 0.0)'}}/>  
                </Pressable>
                <Text style={{marginBottom:5,alignSelf:'center',marginVertical:'auto',color:Colors.white,}}>Katavi National Park</Text>
            </View>

            <View style={{marginTop:10,}}/>
              


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
        </KeyboardAvoidingView>

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
        marginTop:40,
        marginBottom: 20,
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
        elevation: 2, 
        backgroundColor: 'rgba(0, 0, 0, 0.0)',

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

export default TourGuide2
