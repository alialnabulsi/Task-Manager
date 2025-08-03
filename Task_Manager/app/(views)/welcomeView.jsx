import {StyleSheet, Text, View, Image, Button, Pressable} from 'react-native';

import colors from '../constants/colors.js';
import sizings from '../constants/sizings.js';

import welcomeImage from '../../assets/images/icon.png';

const WelcomeView = () => {
  return (
    <View style={styles.container}>
      <Image source ={welcomeImage}></Image>
      <Text style={styles.h1Text}>Task Manager</Text>
      <Text style={styles.h2Text}>Organize your day!</Text>
      <Pressable style={styles.button}></Pressable>
    </View>
  );
}
export default WelcomeView;
const styles = StyleSheet.create({
    container:{

    },
    welcomeImage:{

    },
    h1Text: {
       
    },
    h2Text:{

    },
    button:{

    },

});