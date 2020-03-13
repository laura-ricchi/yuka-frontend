import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useRoute } from "@react-navigation/core";
import { AsyncStorage } from "react-native";
import NutriscoreGradeCard from "../components/NutriscoreGradeCard";
import NoteNutriscoreCard from "../components/NoteNutriscoreGrade";

const ProductsScreen = () => {
  const navigation = useNavigation();

  const { params } = useRoute();
  const [isLoading, setIsLoading] = useState(true);
  const [userHistoryProduct, setUserHistoryProduct] = useState(null);

  useEffect(() =>
    navigation.addListener("focus", async () => {
      try {
        let userHistory = await AsyncStorage.getItem("userHistory");
        console.log("userHistory ===>", userHistory);

        let stored = JSON.parse(userHistory);
        console.log("stored ====>", stored);

        setIsLoading(false);
        setUserHistoryProduct(stored);
      } catch (err) {
        console.log(err.message);
      }
    })
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        let userHistory = await AsyncStorage.getItem("userHistory");
        console.log("userHistory ===>", userHistory);
        let stored = JSON.parse(userHistory);
        console.log("stored ====>", stored);

        setIsLoading(false);
        setUserHistoryProduct(stored);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={userHistoryProduct}
      keyExtractor={item => item.code}
      renderItem={({ item }) => (
        <View style={styles.allProducts}>
          {console.log(item)}
          <Image source={{ uri: item.image }} style={styles.image}></Image>
          <View style={styles.noteProduct}>
            <Text numberOfLines={2} style={styles.productName}>
              {item.name}
            </Text>
            <Text style={styles.productBrand}>{item.brand} </Text>
            <View style={styles.resultsProduct}>
              <NutriscoreGradeCard nutriscore={item.noteNutriscore} />
              <NoteNutriscoreCard
                note={item.noteNutriscore}
                style={styles.note}
              />
            </View>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 90,
    margin: 10
  },
  allProducts: {
    display: "flex",
    flexDirection: "row"
  },

  productName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#272727",
    marginTop: 10
  },
  productBrand: {
    marginTop: 5,
    color: "#ABAAAB"
  },
  resultsProduct: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  }
});

export default ProductsScreen;
