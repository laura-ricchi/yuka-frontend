import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  SimpleLineIcons
} from "@expo/vector-icons";

const QualityCard = ({ quality }) => {
  console.log(quality);

  return (
    <View>
      <View style={styles.fibers}>
        <MaterialCommunityIcons name={"corn"} size={30} color="#787878" />
        <Text>Fibres</Text>
        <Text>
          {quality.fiber <= 3.5
            ? "Quelques fibres"
            : "Excellente quantité de fibres"}
        </Text>
        <Text>{quality.fiber >= 0 && quality.fiber}g</Text>
        <Text>
          {quality.fiber <= 3.5 ? (
            <Entypo name={"dot-single"} size={40} color="#2ECC71" />
          ) : (
            <Entypo name={"dot-single"} size={40} color="#209E53" />
          )}
        </Text>
      </View>

      <View style={styles.proteins}>
        <MaterialCommunityIcons name={"fish"} size={30} color="#787878" />
        <Text>Protéines</Text>
        <Text>
          {quality.proteins <= 8
            ? "Quelques protéines"
            : "Excellente quantité de protéines"}
        </Text>
        <Text>{quality.proteins >= 0 && quality.proteins}g</Text>
        <Text>
          {quality.proteins <= 8 ? (
            <Entypo name={"dot-single"} size={40} color="#2ECC71" />
          ) : (
            <Entypo name={"dot-single"} size={40} color="#209E53" />
          )}
        </Text>
      </View>

      {quality.sugars <= 18 && (
        <View style={styles.sugars}>
          <MaterialCommunityIcons
            name={"cube-outline"}
            size={30}
            color="#787878"
          />
          <Text> Sucres</Text>
          <Text>{quality.sugars === 0 && "Pas de sucre"}</Text>
          <Text>{quality.sugars <= 9 && "Peu de sucre"}</Text>
          <Text>{quality.sugars <= 18 && quality.sugars} g</Text>
          <Text>
            {quality.proteins <= 18 ? (
              <Entypo name={"dot-single"} size={40} color="#2ECC71" />
            ) : (
              <Entypo name={"dot-single"} size={40} color="#209E53" />
            )}
          </Text>
        </View>
      )}

      {quality.saturated_fat <= 4 && (
        <View style={styles.saturatedFat}>
          <SimpleLineIcons name={"drop"} size={30} color="#787878" />
          <Text> Graisses saturées</Text>
          <Text>
            {quality.saturated_fat === 0 && "Pas de graisses saturées"}
          </Text>
          <Text>{quality.saturated_fat >= 1 && "Faible impact"}</Text>
          <Text>{quality.saturated_fat <= 10 && quality.saturated_fat} g</Text>
          <Text>
            {quality.saturated_fat <= 4 ? (
              <Entypo name={"dot-single"} size={40} color="#2ECC71" />
            ) : (
              <Entypo name={"dot-single"} size={40} color="#209E53" />
            )}
          </Text>
        </View>
      )}

      {quality.saturated_fat <= 4 && (
        <View style={styles.saturatedFat}>
          <SimpleLineIcons name={"drop"} size={30} color="#787878" />
          <Text> Graisses saturées</Text>
          <Text>
            {quality.saturated_fat === 0 && "Pas de graisses saturées"}
          </Text>
          <Text>{quality.saturated_fat >= 1 && "Faible impact"}</Text>
          <Text>{quality.saturated_fat <= 10 && quality.saturated_fat} g</Text>
          <Text>
            {quality.saturated_fat <= 4 ? (
              <Entypo name={"dot-single"} size={40} color="#2ECC71" />
            ) : (
              <Entypo name={"dot-single"} size={40} color="#209E53" />
            )}
          </Text>
        </View>
      )}
    </View>
  );
};

// Sel

// Calories
// Catégorie 1
// Catégorie 2-3-4

const styles = StyleSheet.create({
  fibers: {
    flexDirection: "row"
  },
  proteins: {
    flexDirection: "row"
  },
  sugars: {
    flexDirection: "row"
  },
  saturatedFat: {
    flexDirection: "row"
  }
});

export default QualityCard;
