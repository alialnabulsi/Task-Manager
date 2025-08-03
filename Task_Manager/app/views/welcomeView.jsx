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
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: sizings.padding.large,
    paddingVertical: sizings.padding.xlarge,
    justifyContent: 'center',    // center vertically
    alignItems: 'center',        // center horizontally
  },

  welcomeImageStyle: {
    width: sizings.welcomeImageSize.width,
    height: sizings.welcomeImageSize.height,
    resizeMode: 'contain',
    marginBottom: sizings.margin.large,
    borderRadius: sizings.borderRadius.large,
    backgroundColor: colors.white,
  },

  h1Text: {
    fontSize: sizings.fontSize.h1,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: sizings.margin.small,
    textAlign: 'center',
  },

  h2Text: {
    fontSize: sizings.fontSize.h2,
    color: colors.white,
    marginBottom: sizings.margin.xlarge,
    textAlign: 'center',
  },

  button: {
    backgroundColor: colors.secondary,
    paddingVertical: sizings.padding.medium,
    paddingHorizontal: sizings.padding.xxlarge,
    borderRadius: sizings.borderRadius.medium,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',  // center text horizontally inside button
  },
});

