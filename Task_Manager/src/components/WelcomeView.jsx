// src/components/WelcomeView.jsx
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../constants/colors.js';
import sizings from '../../constants/sizings.js';
import welcomeImage from '../../assets/images/logo.png';

const WelcomeView = ({ onContinue }) => {
    return (
        <View style={styles.container}>
            <Image source={welcomeImage} style={styles.welcomeImageStyle} />
            <Text style={styles.h1Text}>Task Manager</Text>
            <Text style={styles.h2Text}>Organize your day!</Text>
            
            <Pressable style={styles.button} onPress={onContinue}>
                <MaterialIcons 
                    name="arrow-forward" 
                    size={30} 
                    color={colors.light.success} 
                />
            </Pressable>
        </View>
    );
};

export default WelcomeView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: sizings.padding.large,
        paddingVertical: sizings.padding.xlarge,
        justifyContent: 'center',
        alignItems: 'center',
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
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        paddingVertical: sizings.padding.ssmall,
        paddingHorizontal: sizings.padding.xlarge,
        borderRadius: sizings.borderRadius.medium,
        borderColor: colors.light.primary,
        borderWidth: 4,
        alignItems: 'center',
        paddingTop: sizings.padding.ssmall,
    }
});