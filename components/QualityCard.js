import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons
} from "@expo/vector-icons";

const QualityCard = ({ quality, qualityNutriments }) => {
  return (
    <View>
      <View style={styles.allNutriments}>
        <MaterialCommunityIcons
          name={"corn"}
          size={20}
          color="#787878"
          style={styles.icons}
        />

        <View style={styles.nutrimentsNote}>
          <Text style={styles.nutriments}>Fibres</Text>
          <Text style={styles.nutrimentsNoteText}>
            {quality.fiber <= 3.5
              ? "Quelques fibres"
              : "Excellente quantité de fibres"}
          </Text>
        </View>
        <View style={styles.nutrimentsDot}>
          <Text style={styles.valueNutrimentsText}>
            {quality.fiber >= 0 && quality.fiber}g
          </Text>
          <Text>
            {quality.fiber <= 3.5 ? (
              <Entypo name={"dot-single"} size={40} color="#2ECC71" />
            ) : (
              <Entypo name={"dot-single"} size={40} color="#209E53" />
            )}
          </Text>
        </View>
      </View>

      <View style={styles.allNutriments}>
        <MaterialCommunityIcons
          name={"fish"}
          size={20}
          color="#787878"
          style={styles.icons}
        />

        <View style={styles.nutrimentsNote}>
          <Text style={styles.nutriments}>Protéines</Text>
          <Text style={styles.nutrimentsNoteText}>
            {quality.proteins <= 8
              ? "Quelques protéines"
              : "Excellente quantité de protéines"}
          </Text>
        </View>
        <View style={styles.nutrimentsDot}>
          <Text style={styles.valueNutrimentsText}>
            {quality.proteins >= 0 && quality.proteins}g
          </Text>
          <Text>
            {quality.proteins <= 8 ? (
              <Entypo name={"dot-single"} size={40} color="#2ECC71" />
            ) : (
              <Entypo name={"dot-single"} size={40} color="#209E53" />
            )}
          </Text>
        </View>
      </View>

      {quality.sugars <= 18 && (
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
              {quality.sugars === 0 && quality.sugars <= 18
                ? "Pas de sucre"
                : "Peu de sucre"}
            </Text>
          </View>

          <View style={styles.nutrimentsDot}>
            <Text style={styles.valueNutrimentsText}>
              {quality.sugars <= 18 && quality.sugars} g
            </Text>
            <Text>
              {quality.sugars <= 18 ? (
                <Entypo name={"dot-single"} size={40} color="#2ECC71" />
              ) : (
                <Entypo name={"dot-single"} size={40} color="#209E53" />
              )}
            </Text>
          </View>
        </View>
      )}

      {quality.saturated_fat <= 4 && (
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
              {quality.saturated_fat === 0 && quality.saturated_fat >= 1
                ? "Pas de graisses saturées"
                : "Faible impact"}
            </Text>
          </View>

          <View style={styles.nutrimentsDot}>
            <Text style={styles.valueNutrimentsText}>
              {quality.saturated_fat <= 4 && quality.saturated_fat} g
            </Text>
            <Text>
              {quality.saturated_fat <= 4 ? (
                <Entypo name={"dot-single"} size={40} color="#2ECC71" />
              ) : (
                <Entypo name={"dot-single"} size={40} color="#209E53" />
              )}
            </Text>
          </View>
        </View>
      )}

      {qualityNutriments.salt_value <= 0.92 && (
        <View style={styles.allNutriments}>
          <MaterialIcons
            name={"grain"}
            size={20}
            color="#787878"
            style={styles.icons}
          />
          <View style={styles.nutrimentsNote}>
            <Text style={styles.nutriments}>Sel</Text>
            <Text style={styles.nutrimentsNoteText}>
              {qualityNutriments.salt_value === 0 &&
              qualityNutriments.salt_value > 0
                ? "Pas de sel"
                : "Faible impact"}
            </Text>
          </View>
          <View style={styles.nutrimentsDot}>
            <Text style={styles.valueNutrimentsText}>
              {qualityNutriments.salt_value <= 0.92 &&
                qualityNutriments.salt_value}
              g
            </Text>
            <Text>
              {qualityNutriments.salt_value <= 0.92 ? (
                <Entypo name={"dot-single"} size={40} color="#2ECC71" />
              ) : (
                <Entypo name={"dot-single"} size={40} color="#209E53" />
              )}
            </Text>
          </View>
        </View>
      )}

      {qualityNutriments["energy - kcal_value"] <= 360 && (
        <View style={styles.allNutriments}>
          <MaterialCommunityIcons
            name={"fire"}
            size={30}
            color="#787878"
            style={styles.icons}
          />

          <View style={styles.nutrimentsNote}>
            <Text style={styles.nutriments}>Calories</Text>
            <Text style={styles.nutrimentsNoteText}>
              {qualityNutriments["energy - kcal_value"] === 0 &&
              qualityNutriments["energy - kcal_value"] <= 360
                ? "Pas calorique"
                : "Faible impact"}
            </Text>
          </View>
          <View style={styles.nutrimentsDot}>
            <Text style={styles.valueNutrimentsText}>
              {qualityNutriments["energy - kcal_value"] <= 360 &&
                qualityNutriments["energy - kcal_value"]}
              kCal
            </Text>
            <Text style={styles.nutrimentsNoteText}>
              {qualityNutriments["energy - kcal_value"] <= 160 ? (
                <Entypo name={"dot-single"} size={40} color="#2ECC71" />
              ) : (
                <Entypo name={"dot-single"} size={40} color="#209E53" />
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

export default QualityCard;
