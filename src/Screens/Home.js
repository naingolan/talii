import { StyleSheet, Dimensions, View, Text, useWindowDimensions } from "react-native";
import React, {useRef} from 'react';
import VideoPlayer from '../Components/Video';
import NationalSites from '../Components/NationalSites';
import Color from '../Utils/Color';
import Image from '../Utils/Image';
import Font from '../Utils/Font';
import BottomCarousel from "../Components/BottomCarousel";

const Height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Home = () => {

    return (
        <View style={styles.container}>
            {/* <View style={{}}> */}
                <VideoPlayer />
            {/* </View> */}
            <View style={{marginTop:240,height:Height*.35,
            }}>
                <View>
                    <Text style={{fontSize:16, color:Color.black,padding:5,fontFamily:Font.bold}}>Explore</Text>
                </View>
                <NationalSites />
            </View>
            <View style={{width:width,height:Height*.18, marginTop:0,}}>
                <BottomCarousel />
            </View>

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
    });


export default Home;