import React from "react";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const NutriscoreGradeCard = ({ nutriscore }) => {
  const nutriscoreGrade = () => {
    let tab = [];
    if (nutriscore === "a") {
      tab.push(<Entypo name={"dot-single"} size={60} color="#209E53" />);
    } else if (nutriscore === "b") {
      tab.push(<Entypo name={"dot-single"} size={60} color="#2ECC71" />);
    } else if (nutriscore === "c") {
      tab.push(<Entypo name={"dot-single"} size={60} color="#FFCD20" />);
    } else if (nutriscore === "d") {
      tab.push(<Entypo name={"dot-single"} size={60} color="#F57D1E" />);
    } else if (nutriscore === "e") {
      tab.push(<Entypo name={"dot-single"} size={60} color="#EF3923" />);
    }

    return tab;
  };
  return <View style={styles.dot}>{nutriscoreGrade()}</View>;
};
const styles = StyleSheet.create({
  dot: {
    flexDirection: "row"
  }
});

export default NutriscoreGradeCard;
