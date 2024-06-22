import React , {useState, useEffect} from 'react';
import { View, StyleSheet, Image,Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Images from '../Utils/Image';
import Color from '../Utils/Color';


const Splash = () => {
    const navigation = useNavigation();
    const [isSplashFinished, setIsSplashFinished] = useState(false);
    console.log("Splash here");

    
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsSplashFinished(true);
  //     //navigation.navigate('Welcome');
  //   }, 2000);

  //   const checkAuthStatus = async () => {
  //     try {
  //       console.log("Ayee catcher");
  //     } catch (error) {
  //       console.log('Error in getting login status:', error);
  //     }
  //   };

  //   checkAuthStatus();

  //   return () => clearTimeout(timer);
  // }, [navigation]);
    
    return (
        <View style={styles.container}>
        <Image source={Images.logo} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
        backgroundColor:Color.secondary,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        borderRadius:20,
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


export default Splash;