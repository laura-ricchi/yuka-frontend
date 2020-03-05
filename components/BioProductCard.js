import React from "react";
import { View } from "react-native";

const BioProductCard = ({ bioProduct }) => {
  const bio = () => {
    if (bioProduct === "bio") {
      <View>
        <Entypo name="feather" size={32} color="green" />
        <Text>Produit naturel</Text>
      </View>;
    }
  };

  return <View>{bio()}</View>;
};

export default BioProductCard;
