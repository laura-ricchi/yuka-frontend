import React, { useState, useEffect } from "react";
import { Text, ActivityIndicator, View } from "react-native";
import axios from "axios";
import { useRoute } from "@react-navigation/core";

const ProductScreen = () => {
  const { params } = useRoute();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  //useEffect avec requete a l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${data.product}.json`
        );
        setData(response.data);
        console.log(response.data);

        setIsLoading(false);
      } catch (err) {
        console.log("error");
      }
    };
    fetchData();
  }, [params.productScanned]);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View>
      : <Text>ProductScreen: {params.productScanned} </Text>}
    </View>
  );
};

export default ProductScreen;
