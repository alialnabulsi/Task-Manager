import {StyleSheet, Text, View, Image, Button, Pressable} from 'react-native';

import colors from '../constants/colors.js';
import sizings from '../constants/sizings.js';

import welcomeImage from '../../assets/images/react-logo.png';

const SignUpView = () => {
  return (
    <View style={styles.container}>
      <Text>This is Sign Up page -_-</Text>
    </View>
  );
}

export default SignUpView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: sizings.padding.large,
    paddingVertical: sizings.padding.xlarge,
    justifyContent: 'center',    // center vertically
    alignItems: 'center',        // center horizontally
  },
});