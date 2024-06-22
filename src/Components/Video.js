// Load the module
import { StyleSheet } from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import Images from '../Utils/Image';
import React, {useRef} from 'react';
// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
 
const VideoPlayer = () => {
 const videoRef = useRef(null);
 const onBuffer = () => {
    console.log('Video is buffering');
  };

  const onError = (error) => {
    console.log('Video error:', error);
  };

  const onEnd = () => {
    console.log('Video has ended');
    videoRef.current.seek(0); // Seek to the start of the video
  };
 
 return (
   <Video 
    // Can be a URL or a local file.
    source={Images.samia_royal}
    // Store reference  
    ref={videoRef}
    // Callback when remote video is buffering                                      
    onBuffer={onBuffer}
    // Callback when video cannot be loaded              
    onError={onError}  
   // controls={true} // Shows video controls (play/pause etc.)
    resizeMode="contain" // Adjusts how the video should be scaled to fit its space.
    style={styles.backgroundVideo}
    onEnd={onEnd}
    volume={0}


   />
 )
}
export default VideoPlayer;
 
// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    height:250,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor: "#0A4322"
  },
});
