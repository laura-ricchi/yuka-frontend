import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import axios from "axios";
import { useRoute } from "@react-navigation/core";
import { Entypo } from "@expo/vector-icons";

const ProductScreen = () => {
  const { params } = useRoute();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  //useEffect avec requete a l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${params.productScanned}.json`
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
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <Image
          style={styles.image}
          source={{ uri: data.product.image_front_url }}
        ></Image>
        <View style={{ flex: 1, marginTop: 15 }}>
          <Text style={styles.productName}>{data.product.product_name} </Text>
          <Text style={styles.productBrand}>{data.product.brands} </Text>
        </View>
      </View>

      <View>
        <Entypo name="feather" size={32} color="green" />

        <Text>
          {data.product.labels === "Bio"
            ? "Bio"
            : data.product.labels === "Produit naturel"
            ? true
            : false}
        </Text>
        <View>
          <Text>Protéines</Text>
          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 15,
    height: 100,
    width: 80
  },
  productName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#272727"
  },
  productBrand: {
    marginTop: 5,
    color: "#ABAAAB"
  }
});

export default ProductScreen;
