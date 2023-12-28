import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AquiFi from '../assets/pd-logo-1.png';

const LogInSignUp = ({ navigation }) => {
  
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToLogIn = () => {
    navigation.navigate('LogIn');
  };

  return (
    <View style={styles.container}>
      <Image source={AquiFi} style={styles.logo} />
      <TouchableOpacity
        style={styles.loginbutton}
        onPress={goToLogIn} 
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
          style={styles.signupbutton}
          onPress={goToSignUp} 
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 245,
  },
  loginbutton: {
    backgroundColor: '#0B3954',
    paddingVertical: 10,
    paddingHorizontal: 85,
    borderRadius: 50, 
    marginTop: 50,
    marginBottom: 10,
  },
  signupbutton: {
    backgroundColor: '#0B3954',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 50, 
    margin: 10,
  },  
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LogInSignUp;