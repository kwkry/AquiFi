import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { getDatabase, ref, onValue, update } from "firebase/database";
import app from "../../stores/firebaseConfig";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

const PHScreen = () => {
  const dumpData = [
    9.3, 8.9, 9.6, 8.2, 9.2, 8.5, 8.6, 9.1, 9.8, 8.3, 8.7, 8.8, 9.4, 8.4, 9.5,
    9.0, 8.0, 9.7, 9.9, 9.7,
  ];

  const [pHData, setPHData] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const pHRef = ref(db, "Sensor/pH_Level/");

    onValue(pHRef, (snapshot) => {
      const rawData = snapshot.val();
      console.log(rawData);

      const dataValues = Object.values(rawData);
      console.log(dataValues);

      setPHData(dataValues);
      setDataArray((prevArray) => [...prevArray, ...dataValues]); // Concatenate new values to the existing array
    });
  }, []);

  console.log("Array:", dataArray);

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.accent}></View>
      </View>

      <View style={styles.fillOut}>
        {pHData.length > 0 && (
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine data={dataArray} />
          </VictoryChart>
        )}
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

export default PHScreen;
