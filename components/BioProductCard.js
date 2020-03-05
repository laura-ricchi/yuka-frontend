import React from "react";
import { StyleSheet, View } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

const BioProductCard = ({ bioProduct }) => {
  const bio = () => {
    if (bioProduct === "bio") {
      <View style={styles.bioProduct}>
        <Entypo name="feather" size={20} color="#757575" />
        <Text>Produit naturel</Text>
        <AntDesign name="check" size={20} color="#78C689" />
      </View>;
    }
  };

  return <View>{bio()}</View>;
};

const styles = StyleSheet.create({
  bioProduct: {
    backgroundColor: "yellow"
  }
});

export default BioProductCard;
