import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MeasureProduct = ({ measure }) => {
  const measureProducts = () => {
    let tab = [];
    if (measure === "serving") {
      tab.push(
        <View>
          <Text style={styles.measure}>Pour 100ml</Text>
        </View>
      );
    } else if (measure === "100g") {
      tab.push(
        <View>
          <Text style={styles.measure}>Pour 100g</Text>
        </View>
      );
    }
    return tab;
  };
  return <View>{measureProducts()}</View>;
};

const styles = StyleSheet.create({
  measure: {
    color: "#ABAAAB"
  }
});

export default MeasureProduct;
