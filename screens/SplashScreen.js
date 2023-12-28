import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import AquiFi from '../assets/pd-logo.png';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
      const splashTimer = setTimeout(() => {
        navigation.navigate('LogInSignUp');
      }, 3000);
  
      return () => clearTimeout(splashTimer);
    }, [navigation]);
  
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#FAFAFA" barStyle="light-content" />
        <Image source={AquiFi} style={styles.logo1} resizeMode="contain" />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0B3954',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo1: {
      width: 300, 
      height: 300,
    },
});

export default SplashScreen;    