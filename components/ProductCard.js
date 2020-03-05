import React from "react";
import { View } from "react-native";

function ProductCard() {
  // conditions

  return (
    <View>
      <View>
        <Entypo name="feather" size={32} color="green" />

        <Text>
          {data.product.labels === "Bio"
            ? "Bio"
            : data.product.labels === "Produit naturel"
            ? true
            : false}
        </Text>
      </View>
    </View>
  );
}

export default ProductCard;
