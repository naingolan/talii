import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import LottieView from 'lottie-react-native';
import LoaderStart from '../Loader';
import LoaderKit from 'react-native-loader-kit'
import Color from '../colors';
import { BackHandler } from 'react-native';

const CustomView = () => {
    return (
        <LoaderKit
           style={{ width: 50, height: 50 , backgroundColor:Color.transaprent}}
           name={'BallClipRotate'} // Optional: see list of animations below
           color={Color.lghtPrimary} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
        />
    );
  };

const Loader = ({ showAlert, feedback }) => {
    const [visible, setVisible] = useState(showAlert);

    useEffect(() => {
      setVisible(showAlert); 
      const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () => backHandler.remove();
    }, [showAlert]); 

    const handleBackPress = () => {
      if (visible) {
        setVisible(false); 
        // feedback(false); 
        return true; 
      }
      return false; 
    };

    console.log("Ayee am called to give some loading")
  return (
      <AwesomeAlert
        show={visible}
        showProgress={false}
        customView = {<CustomView style={{backgroundColor:Color.transaprent}} />}
        // title="AwesomeAlert"
        // message="I have a message for you!"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={
          true
        }
        onDismiss={feedback}
        // showCancelButton={true}
        // showConfirmButton={true}
        // cancelText="No, cancel"
        // confirmText="Yes, delete it"
        // confirmButtonColor="#DD6B55"
        // onCancelPressed={() => setShowAlert(false)}
        // onConfirmPressed={() => setShowAlert(false)}
      />
  );
};

export default Loader;
