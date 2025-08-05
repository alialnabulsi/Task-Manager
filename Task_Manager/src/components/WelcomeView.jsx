// src/components/WelcomeView.jsx
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../constants/colors.js';
import sizings from '../../constants/sizings.js';
import welcomeImage from '../../assets/images/logo.png';

const WelcomeView = ({ onContinue }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={welcomeImage} style={styles.welcomeImageStyle} />
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.h1Text}>Task Manager</Text>
                <Text style={styles.h2Text}>Organize your day!</Text>
            </View>
            
            <Pressable style={styles.button} onPress={onContinue}>
                <MaterialIcons 
                    name="arrow-forward" 
                    size={24} 
                    color="white" 
                    style={styles.icon}
                />
                <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
        </View>
    );
};

export default WelcomeView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F0', // Cream/beige background
        paddingHorizontal: 20,
        paddingVertical: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },

    welcomeImageStyle: {
        width: 280,
        height: 400,
        resizeMode: 'contain',
        borderRadius: 16,
        backgroundColor: '#E8E0D4', // Light beige frame
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },

    textContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },

    h1Text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#0E151B', // Dark text color from HTML
        marginBottom: 8,
        textAlign: 'center',
        letterSpacing: -0.5,
    },

    h2Text: {
        fontSize: 16,
        color: '#0E151B',
        textAlign: 'center',
        fontWeight: '400',
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1991E6', // Blue color from HTML
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 50, // Fully rounded button
        minWidth: 200,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    icon: {
        marginRight: 8,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 0.25,
    }
});