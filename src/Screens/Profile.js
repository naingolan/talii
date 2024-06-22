import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions,Pressable,  TextInput, StyleSheet, Image,} from 'react-native';
import NationalSites from '../Components/NationalSites';
import Color from '../Utils/Color';
import Images from '../Utils/Image';
import Font from '../Utils/Font';
import Language from '../Language';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;
const screenWidth = Width;
const Profile = () => {
    const navigation = useNavigation();
    const activeLang = 'en';
    const [username, setUsername] = useState('');
    const [activeUser, setActiveUser] = useState(null);
    const [activeUsername, setActiveUsername] = useState('');
    console.log(activeUser);
    useEffect(() => {
        const fetchActiveUser = async () => {
            try {
                const usersString = await AsyncStorage.getItem('users');
                const users = usersString ? JSON.parse(usersString) : [];

                const activeUser = users.find(user => user.status === 'active');
                if (activeUser) {
                    setActiveUser(activeUser);

                    console.log("For active user");
                    console.log(activeUser);
                    console.log(activeUser.username);
                    setActiveUsername(activeUser.username);
                }
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchActiveUser();
    }, []);

    const handleLogout = async () => {
        try {
            const usersString = await AsyncStorage.getItem('users');
            let users = usersString ? JSON.parse(usersString) : [];
    
            // Loop through all users and set their status to 'inactive'
            users = users.map(user => ({
                ...user,
                status: 'inactive',
            }));
    
            await AsyncStorage.setItem('users', JSON.stringify(users));
    
            navigation.navigate('Login');
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };
    

    return (
        <View style={styles.container}>

            <View style={{padding:10, justifyContent:'flex-start', flexDirection:'row', alignItems:'center',borderRadius:10,backgroundColor:Color.secondary, width:Width*.95,marginTop:20,height:Height*.15,}}>
                <Image source={Images.user} style={{height:60, width:60, }} />
                <Text style={{marginLeft:20,fontFamily:Font.bold,color:Color.white,fontSize:24}}>{activeUsername}</Text>

            </View>

            <Text style={{alignSelf:'flex-start',color:Color.secondary, fontFamily:Font.bold, fontSize:14, marginLeft:20, marginVertical:20,}}>Details</Text>

          {/* {activeUser.companyName &&
            <TextInput
                style={styles.input}
                placeholderTextColor={Color.gray}
                placeholder={Language("address", activeLang)}
                onChangeText={text => setUsername(text)}
                value={username}
            />
          } */}

            {/* <TextInput
                style={styles.input}
                placeholderTextColor={Color.gray}
                placeholder={Language("address", activeLang)}
                onChangeText={text => setUsername(text)}
                value={username}
            /> */}

            {/* <TextInput
                style={styles.input}
                placeholderTextColor={Color.gray}
                placeholder={Language("address", activeLang)}
                onChangeText={text => setUsername(text)}
                value={username}
            /> */}

            {/* <TextInput
                style={styles.input}
                placeholderTextColor={Color.gray}
                placeholder={Language("address", activeLang)}
                onChangeText={text => setUsername(text)}
                value={username}
            /> */}

        <Pressable style={{marginLeft:0, borderRadius:5,height:50, width:screenWidth*.9, backgroundColor:Color.secondary}} onPress={() => handleLogout()} >
          <Text style={{fontFamily:Font.bold,fontWeight:"600",color:Color.white,fontSize:20,margin:'auto'}}>Logout</Text>
        </Pressable>




        </View>
   
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        color:Color.grey,
        fontFamily: Font.regular,
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: Color.primary,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: Color.primary, 
        elevation: 2, 
        // shadowColor: '#0C5E97', 
        // shadowOffset: {
        //   width: 2, 
        //   height: 4, 
        // },
        // shadowOpacity: 0.25, // Opacity of the shadow
        // shadowRadius: 4,
    },
});

export default Profile;