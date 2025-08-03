import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  window: {
    width,
    height,
  },
  // Font sizes
  fontSize: {
    h1: 32,
    h2: 24,
    large: 18,
    medium: 16,
    small: 14,
  },
  // Margins & Paddings
  margin: {
    small: 5,
    medium: 10,
    large: 15,
    xlarge: 20,
    xxlarge: 40,
  },
  padding: {
    small: 5,
    medium: 10,
    large: 15,
    xlarge: 20,
    xxlarge: 40,
  },
  // Border Radius
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
  },

  welcomeImageSize: {
    width: width * 0.3, // 30% of screen width
    height: width * 0.3, // Maintain aspect ratio
  }
};