import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";
import useTurbidityData from "../../stores/readTurbidityData";

const TurbidityScreen = () => {
  const turbidityData = useTurbidityData();
  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.accent}></View>
      </View>

      <View style={styles.fillOut}>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine data={turbidityData} />
          <VictoryAxis
            style={{
              tickLabels: { fontSize: 10, angle: 90, textAnchor: "start" },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              tickLabels: { fontSize: 10, textAnchor: "start" },
            }}
          />
        </VictoryChart>
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

  fillOut: {
    flex: 1,
    position: "absolute",
    top: "20%",
    bottom: "10%",
    left: "5%",
    right: "5%",
    elevation: 5,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});

export default TurbidityScreen;
