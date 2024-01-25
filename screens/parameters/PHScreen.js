import { View, StyleSheet } from "react-native";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";
import usepHData from "../../stores/readpHData";

const PHScreen = () => {
  const pHData = usepHData();
  return (
    <View style={styles.container}>
      <View style={styles.fillOut}>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine data={pHData} />
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

export default PHScreen;
