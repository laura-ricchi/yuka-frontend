import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons
} from "@expo/vector-icons";

const DefaultCard = ({ defaults, defaultsNutriments }) => {
  return (
    <View>
      {defaults.sugars >= 18 && (
        <View style={styles.allNutriments}>
          <MaterialCommunityIcons
            name={"cube-outline"}
            size={20}
            color="#787878"
            style={styles.icons}
          />
          <View style={styles.nutrimentsNote}>
            <Text style={styles.nutriments}> Sucres</Text>

            <Text style={styles.nutrimentsNoteText}>
              {defaults.sugars >= 18 && defaults.sugars <= 31
                ? "Un peu trop sucré"
                : "Trop sucré"}
            </Text>
          </View>

          <View style={styles.nutrimentsDot}>
            <Text style={styles.valueNutrimentsText}>
              {defaults.sugars >= 18 && defaults.sugars} g
            </Text>
            <Text>
              {defaults.sugars <= 31 ? (
                <Entypo name={"dot-single"} size={40} color="#F57D1E" />
              ) : (
                <Entypo name={"dot-single"} size={40} color="#EF3923" />
              )}
            </Text>
          </View>
        </View>
      )}

      {defaults.saturated_fat >= 4 && (
        <View style={styles.allNutriments}>
          <SimpleLineIcons
            name={"drop"}
            size={20}
            color="#787878"
            style={styles.icons}
          />

          <View style={styles.nutrimentsNote}>
            <Text style={styles.nutriments}> Graisses saturées</Text>
            <Text style={styles.nutrimentsNoteText}>
              {defaults.saturated_fat >= 4 && defaults.saturated_fat >= 7
                ? "Un peu trop gras"
                : "Trop gras"}
            </Text>
          </View>
          <View style={styles.nutrimentsDot}>
            <Text style={styles.valueNutrimentsText}>
              {defaults.saturated_fat >= 4 && defaults.saturated_fat} g
            </Text>
            <Text>
              {defaults.saturated_fat <= 7 ? (
                <Entypo name={"dot-single"} size={40} color="#F57D1E" />
              ) : (
                <Entypo name={"dot-single"} size={40} color="#EF3923" />
              )}
            </Text>
          </View>
        </View>
      )}

      {defaultsNutriments.salt_value >= 0.92 && (
        <View style={styles.allNutriments}>
          <MaterialIcons
            name={"grain"}
            size={20}
            color="#787878"
            style={styles.icons}
          />
          <Text style={styles.nutriments}>Sel</Text>
          <Text style={styles.nutrimentsNoteText}>
            {defaultsNutriments.salt_value >= 0.92 && 1.62
              ? "Un peu trop salé"
              : "Trop salé"}
          </Text>
          <Text style={styles.valueNutrimentsText}>
            {defaultsNutriments.salt_value <= 0.92 &&
              defaultsNutriments.salt_value}
            g
          </Text>
          <View style={styles.nutrimentsDot}>
            <Text>
              {defaultsNutriments.salt_value <= 0.92 ? (
                <Entypo name={"dot-single"} size={40} color="#F57D1E" />
              ) : (
                <Entypo name={"dot-single"} size={40} color="#EF3923" />
              )}
            </Text>
          </View>
        </View>
      )}

      {defaultsNutriments["energy-kcal_value"] >= 360 && (
        <View style={styles.allNutriments}>
          <MaterialCommunityIcons
            name={"fire"}
            size={20}
            color="#787878"
            style={styles.icons}
          />

          <View style={styles.nutrimentsNote}>
            <Text style={styles.nutriments}>Calories</Text>
            <Text style={styles.nutrimentsNoteText}>
              {
                (defaultsNutriments["energy-kcal_value"] =
                  360 && defaultsNutriments["energy - kcal_value"] <= 560
                    ? "Un peu trop calorique"
                    : "Trop calorique")
              }
            </Text>
          </View>
          <View style={styles.nutrimentsDot}>
            <Text style={styles.valueNutrimentsText}>
              {defaultsNutriments["energy-kcal_value"] >= 360 &&
                defaultsNutriments["energy - kcal_value"] <= 560}
              kCal
            </Text>
            <Text style={styles.nutrimentsNoteText}>
              {defaultsNutriments["energy-kcal_value"] <= 560 ? (
                <Entypo name={"dot-single"} size={40} color="#F57D1E" />
              ) : (
                <Entypo name={"dot-single"} size={40} color="#EF3923" />
              )}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  allNutriments: {
    flexDirection: "row"
  },
  nutrimentsNote: {
    flexDirection: "column"
  },
  icons: {
    marginLeft: 5
  },
  nutriments: {
    fontWeight: "bold",
    fontSize: 16
  },
  nutrimentsDot: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 5
  },
  nutrimentsNoteText: {
    color: "#ABAAAB"
  },
  valueNutrimentsText: {
    color: "#ABAAAB",
    fontSize: 16
  }
});

export default DefaultCard;
