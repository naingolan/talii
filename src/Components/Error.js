import React from 'react';
import { View, Image, Text} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import LottieView from 'lottie-react-native';
import LoaderStart from '../Loader';
import LoaderKit from 'react-native-loader-kit'
import Color from '../colors';
import Images from '../images';
import Font from '../fonts';
import Language from '../../Language';
const CustomView = ({errorTitle, errorMsg}) => {
    return (

        <View  style={{justifyContent:'center', alignItems:'center'}}>
            <Image style={{height:25, width:25, justifyContent:'center',margin:10,}} source={Images.wrong}/>
             <View style={{ justifyContent:'center', alignItems:'center',}}>
                <Text style={{fontSize:16, fontFamily:Font.regular, color:Color.textBold, margin:5}} >{errorTitle}</Text>
                <Text style={{fontSize:12, fontFamily:Font.regular,color:Color.textBold}}>{errorMsg}</Text>
                
             </View>
        </View>

    );
  };

const Error = ({ showAlert, errorMsg, errorTitle, feedback }) => {
    console.log(`Show alert is ${showAlert}`)
  return (
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        customView = {<CustomView style={{backgroundColor:Color.transaprent}} errorMsg={errorMsg} errorTitle = {errorTitle} />}
        // title="AwesomeAlert"
        // message="I have a message for you!"
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={true}
        // showCancelButton={true}
        showConfirmButton={true}
        // cancelText="No, cancel"
        confirmText={Language("retry", 'sw')}
        confirmButtonColor="#ff0f0f"
        confirmButtonTextStyle={{color:"#ffffff"}}
        
        // onCancelPressed={() => console.log("accepted")}
        onConfirmPressed={() => feedback()}
      />
  );
};

export default Error;
