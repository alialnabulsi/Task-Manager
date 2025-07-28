import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <Image
 source={require('../assets/images/WelcomeLogo.jpg')}
        style={styles.image}
      />

      
      <Text style={styles.title}>ProjectMaster</Text>
      <Text style={styles.subtitle}>Project Management App</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonArrow}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center', 
    alignItems: 'center',    
    padding: 20,            
  },
  image: {
    width: width * 0.7,
    height: width * 0.5, 
    marginBottom: 30,    
  },
  title: {
    fontSize: width * 0.07, 
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: width * 0.04,
    color: '#666666',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50', 
    width: 50,
    height: 50,
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonArrow: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
