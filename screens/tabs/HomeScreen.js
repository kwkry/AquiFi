import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Gauge from "../../components/Gauge";
import userImage from "../../assets/icons/White-Profile.png";
import turbidity from "../../assets/icons/Turbidity-Sensor.png";
import rc from "../../assets/icons/Residual-Chlorine-Sensor.png";
import ph from "../../assets/icons/pH-Sensor.png";

const HomeScreen = () => {
  const turbidityValue = 5;
  const residualChlorineValue = 1.5;
  const pHValue = 7.1;

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
        <Text style={styles.title}>Water Quality Monitoring System</Text>
        <View style={styles.topContainers}>
          {/* Container 1 - Turbidity */}
          <Pressable style={styles.containerBox1}>
            <View style={styles.innerContainer}>
              <Gauge
                value={turbidityValue}
                parameter="Turbidity"
                maxValue={50}
                containerSize={80}
                gaugeStyles={{ borderColor: "red" }}
              />
            </View>
            <Image source={turbidity} style={styles.icon} />
            <Text style={styles.bottomText}>Turbidity</Text>
          </Pressable>
          {/* Container 2 - Residual Chlorine */}
          <Pressable style={styles.containerBox2}>
            <View style={styles.innerContainer}>
              <Gauge
                value={residualChlorineValue}
                parameter="Residual Chlorine"
                maxValue={30}
                containerSize={80}
                gaugeStyles={{ borderColor: "green" }}
              />
            </View>
            <Image source={rc} style={styles.icon} />
            <Text style={styles.bottomText}>Residual Chlorine</Text>
          </Pressable>
        </View>

        <View style={styles.bottomContainers}>
          {/* Container 3 - pH */}
          <Pressable style={styles.containerBox3}>
            <View style={styles.innerContainer}>
              <Gauge
                value={pHValue}
                parameter="pH"
                maxValue={14}
                containerSize={80}
                gaugeStyles={{ borderColor: "blue" }}
              />
            </View>
            <Image source={ph} style={styles.icon} />
            <Text style={styles.bottomText}>pH</Text>
          </Pressable>
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
    bottom: 0,
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
    bottom: "85%",
  },
  userImage: {
    width: 70,
    height: 70,
  },
  fillOut: {
    flex: 1,
    position: "absolute",
    top: "21%",
    bottom: "1%",
    left: "7%",
    right: "7%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "white",
  },
  containerBox1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#85A0AF",
    borderRadius: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    elevation: 5,
  },
  containerBox2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#85A0AF",
    borderRadius: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 5,
  },
  containerBox3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#85A0AF",
    borderRadius: 20,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 5,
  },
  topContainers: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomContainers: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  innerContainer: {
    justifyContent: "flex-end",
    backgroundColor: "#FAFAFA",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 60,
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 15,
    right: 15,
    width: 30,
    height: 30,
  },
  bottomText: {
    color: "white",
    paddingTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
