import React from 'react';
import {View, Text} from 'react-native';
import NatioanalSitesListed from '../Components/NationalSitesListed';
import Color from '../Utils/Color';
import Image from '../Utils/Image';
import Font from '../Utils/Font';

const Explore = () => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{marginVertical:15,marginLeft:10, alignSelf:'flex-start', fontSize:24, color:Color.secondary,padding:5,fontFamily:Font.extraBold}}>Explore</Text>

      <NatioanalSitesListed />
    </View>
  );
}

export default Explore;
