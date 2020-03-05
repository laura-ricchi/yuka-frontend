import React from "react";
import { Text, View, StyleSheet } from "react-native";

const NoteNutriscoreGrade = ({ note }) => {
  const noteNutriscore = () => {
    if (note === "a") {
      return (
        <View>
          <Text style={styles.note}>100/100</Text>
          <Text style={styles.textNote}>Excellent</Text>
        </View>
      );
    } else if (note === "b") {
      return (
        <View>
          <Text style={styles.note}>80/100</Text>
          <Text style={styles.textNote}>Très bon</Text>
        </View>
      );
    } else if (note === "c") {
      return (
        <View>
          <Text style={styles.note}>70/100</Text>
          <Text style={styles.textNote}>Bon</Text>
        </View>
      );
    } else if (note === "d") {
      return (
        <View>
          <Text style={styles.note}>40/100</Text>
          <Text style={styles.textNote}>Médiocre</Text>
        </View>
      );
    } else if (note === "e") {
      return (
        <View>
          <Text style={styles.note}>10/100</Text>
          <Text style={styles.textNote}>Mauvais</Text>
        </View>
      );
    }
  };
  return <View style={styles.note}>{noteNutriscore()}</View>;
};
const styles = StyleSheet.create({
  note: {
    fontWeight: "bold",
    fontSize: 20
  },
  textNote: {
    color: "#ABAAAB",
    fontSize: 15
  }
});

export default NoteNutriscoreGrade;
