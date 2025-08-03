import {StyleSheet, Text, View, Image, Button, Pressable} from 'react-native';

import colors from '../constants/colors.js';
import sizings from '../constants/sizings.js';

import welcomeImage from '../../assets/images/react-logo.png';

const WelcomeView = () => {
  return (
    <View style={styles.container}>
      <Image source ={welcomeImage} style={styles.welcomeImageStyle}></Image>
      <Text style={styles.h1Text}>Task Manager</Text>
      <Text style={styles.h2Text}>Organize your day!</Text>
      <Pressable style={styles.button}></Pressable>
    </View>
  );
}
export default WelcomeView;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    welcomeImageStyle:{
        width:sizings.welcomeImageSize.width,
        height:sizings.welcomeImageSize.height,
        resizeMode: 'contain',
    },
    h1Text: {
        
       
    },
    h2Text:{

    },
    button:{

    },

});