import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const Gauge = ({ value, parameter, maxValue, containerSize, gaugeStyles }) => {
  const gaugeSize = containerSize || 80;
  const strokeWidth = 10;
  const radius = (gaugeSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  // Calculate the progress percentage
  const progress = (value / maxValue) * 100;
  const progressInRadians = (progress / 100) * (2 * Math.PI);
  const endX =
    gaugeSize / 2 + radius * Math.cos(-progressInRadians - Math.PI / 2);
  const endY =
    gaugeSize / 2 + radius * Math.sin(-progressInRadians - Math.PI / 2);

  return (
    <View
      style={[
        styles.gaugeContainer,
        { width: gaugeSize, height: gaugeSize },
        gaugeStyles,
      ]}
    >
      <Svg height={gaugeSize} width={gaugeSize}>
        <Circle
          cx={gaugeSize / 2}
          cy={gaugeSize / 2}
          r={radius}
          stroke="#ddd"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Path
          d={`M${gaugeSize / 2},${gaugeSize / 2} L${gaugeSize / 2},${
            strokeWidth / 2
          }
              A${radius},${radius} 0 ${
            progress > 50 ? 1 : 0
          },1 ${endX},${endY} Z`}
          fill={
            parameter === "Turbidity"
              ? "#f00"
              : parameter === "Residual Chlorine"
              ? "#0f0"
              : "#00f"
          }
        />
      </Svg>
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gaugeContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  valueText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Gauge;
