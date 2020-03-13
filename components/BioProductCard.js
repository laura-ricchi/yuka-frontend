import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

const BioProductCard = ({ bioProduct }) => {
  return (
    <View style={styles.allBioProduct}>
      {bioProduct === "Agriculture Biologique" ||
        ("Bio" && (
          <View style={styles.bioProductNote}>
            <Entypo
              style={styles.iconCheck}
              name="feather"
              size={20}
              color="#757575"
            />
            <View style={styles.bioProductText}>
              <Text style={styles.bio}>Bio</Text>
              <Text style={styles.bioProductNatural}>Produit naturel</Text>
            </View>
            <View style={styles.bioProductCheck}>
              <AntDesign name="check" size={20} color="#78C689" />
            </View>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  allBioProduct: {
    marginBottom: 5
  },
  bioProductNote: {
    flexDirection: "row"
  },
  bioProductText: {
    flexDirection: "column"
  },
  iconCheck: {
    marginLeft: 5
  },
  bio: {
    fontWeight: "bold",
    fontSize: 16
  },
  bioProductNatural: {
    color: "#ABAAAB",
    fontSize: 16
  },
  bioProductCheck: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: 5
  }
});

export default BioProductCard;
