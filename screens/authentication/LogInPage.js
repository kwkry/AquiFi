import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import user from "../../assets/icons/Black-Profile.png";
import Login from "../../stores/authLoginIn";

const LogInPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const goToLandingPage = () => {
    Login({ email: email, password: password });
    navigation.navigate("LandingPage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.accent} />
      </View>
      <View style={styles.fillOut}>
        <Image source={user} style={styles.user} />
        <Text style={styles.subTitles}>Username or Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Username or Email"
          onChangeText={setEmail}
        />

        <Text style={styles.subTitles}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          secureTextEntry
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.logInButton} onPress={goToLandingPage}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.horizontalLine}></View>

        <TouchableOpacity onPress={goToSignUp}>
          <View style={styles.loginLinkContainer}>
            <Text style={styles.SignupLinkText}>Don't have an account? </Text>
            <Text style={styles.SignupLink}>Sign up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: "0%",
  },
  frame: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  user: {
    width: 70,
    height: 70,
    left: "37%",
  },
  accent: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: "70%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#0B3954",
  },
  fillOut: {
    flex: 1,
    position: "absolute",
    top: "20%",
    bottom: "30%",
    left: "7%",
    right: "7%",
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingHorizontal: 40,
    paddingTop: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: "#0B3954",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitles: {
    color: "#0B3954",
    fontWeight: "bold",
  },
  logInButton: {
    backgroundColor: "#0B3954",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
    bottom: "0.9%",
  },
  horizontalLine: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginVertical: 20,
  },
  logInWithText: {
    color: "#0B3954",
    top: "-20%",
  },
  logInWithContainer: {
    alignItems: "center",
    paddingBottom: 40,
  },
  SignupLink: {
    fontSize: 16,
    color: "#0B3954",
    fontWeight: "bold",
  },
  loginLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    bottom: "10%",
  },
  user: {
    alignSelf: "center",
    height: 70,
    width: 70,
    marginBottom: 10,
  },
});

export default LogInPage;
