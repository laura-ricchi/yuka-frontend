import React from "react";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const NutriscoreGradeCard = ({ nutriscore }) => {
  const nutriscoreGrade = () => {
    if (nutriscore === "a") {
      return <Entypo name={"dot-single"} size={60} color="#209E53" />;
    } else if (nutriscore === "b") {
      return <Entypo name={"dot-single"} size={60} color="#2ECC71" />;
    } else if (nutriscore === "c") {
      return <Entypo name={"dot-single"} size={60} color="#F57D1E" />;
    } else if (nutriscore === "d" || "e") {
      return <Entypo name={"dot-single"} size={60} color="#EF3923" />;
    }
  };
  return <View style={styles.dot}>{nutriscoreGrade()}</View>;
};
const styles = StyleSheet.create({
  dot: {
    flexDirection: "row"
  }
});

export default NutriscoreGradeCard;
