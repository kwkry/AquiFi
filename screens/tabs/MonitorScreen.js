import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import userImage from "../../assets/icons/White-Profile.png";

const MonitorScreen = () => {
  const navigation = useNavigation();

  const goToTurbidity = () => {
    navigation.navigate("TurbidityScreen");
  };
  const goToResidualChlorine = () => {
    navigation.navigate("ResidualCScreen");
  };
  const goTopH = () => {
    navigation.navigate("PHScreen");
  };
  const [selectedValveControl, setSelectedValveControl] = useState(null);
  const translateX = useRef(new Animated.Value(0)).current;

  const toggleValve = () => {
    const newValue =
      selectedValveControl === "Close Valve" ? "Open Valve" : "Close Valve";
    setSelectedValveControl(newValue);
    Animated.timing(translateX, {
      toValue: newValue === "Open Valve" ? 30 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const currentTime = new Date();
  const hour = currentTime.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const userName = "User !";

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentTime.toLocaleDateString(undefined, dateOptions);

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.accent}>
          {/* Icon */}
          <View style={styles.menuIconContainer}></View>
          {/* Date and Greetings */}
          <View style={styles.dateGreetingsContainer}>
            <Text style={styles.date}>{formattedDate}</Text>
            <Text style={styles.greetings}>
              {greeting}, {userName}
            </Text>
          </View>
          {/* User Image */}
          <View style={styles.userImageContainer}>
            <Image source={userImage} style={styles.userImage} />
          </View>
        </View>
      </View>

      <View style={styles.fillOut}>
        {/* Top container for parameter selection */}
        <View style={styles.topContainer}>
          <Text style={styles.description}>
            Select a parameter you want to monitor
          </Text>
          <Pressable style={styles.button} onPress={goToTurbidity}>
            <Text style={styles.buttonText}>Turbidity</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={goToResidualChlorine}>
            <Text style={styles.buttonText}>Residual Chlorine</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={goTopH}>
            <Text style={styles.buttonText}>pH</Text>
          </Pressable>
        </View>

        {/* Bottom container for solenoid valve control */}
        <View style={styles.bottomContainer}>
          <View style={styles.switchContainer}>
            <Text style={styles.switchDescription}>Control Solenoid Valve</Text>
            <Pressable style={styles.switchButton} onPress={toggleValve}>
              <Animated.View
                style={[
                  styles.switchKnob,
                  {
                    transform: [
                      {
                        translateX: translateX.interpolate({
                          inputRange: [0, 30],
                          outputRange: [0, 30],
                          extrapolate: "clamp",
                        }),
                      },
                    ],
                  },
                ]}
              />
            </Pressable>
          </View>
        </View>
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  menuIconContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  dateGreetingsContainer: {
    alignItems: "flex-start",
    flex: 1,
    marginHorizontal: 10,
    marginTop: 40,
  },
  date: {
    color: "white",
    fontSize: 12,
  },
  greetings: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  userImageContainer: {
    alignItems: "flex-end",
    bottom: "50%",
  },
  userImage: {
    width: 70,
    height: 70,
  },
  fillOut: {
    flex: 1,
    position: "absolute",
    top: "20%",
    bottom: "2%",
    left: "5%",
    right: "5%",
    elevation: 5,
    backgroundColor: "#F5F5F5",
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0B3954",
    borderRadius: 30,
    padding: 50,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
    elevation: 5,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0B3954",
    borderRadius: 30,
    padding: 10,
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 50,
    marginRight: 50,
    elevation: 5,
  },
  switchContainer: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchDescription: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    paddingBottom: 20,
  },
  switchButton: {
    width: 80,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#ddd",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  switchKnob: {
    width: 36,
    height: 36,
    borderRadius: 23,
    backgroundColor: "#0B3954",
  },
  description: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#F5f5f5",
    borderRadius: 30,
    padding: 10,
    marginBottom: 15,
    borderColor: "black",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});

export default MonitorScreen;
