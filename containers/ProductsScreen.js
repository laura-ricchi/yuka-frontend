import React from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/core";

const ProductsScreen = () => {
  const { params } = useRoute();
  console.log(params);

  //useEffect pour recupérer l'Async storage "userHistory"
  return (
    <View>
      <Text>All products</Text>
    </View>
  );
};

export default ProductsScreen;
