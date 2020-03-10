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
      keyExtractor={item => item.product}
      renderItem={({ item }) => (
        <View>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text>{item.name} </Text>
          <Text>{item.brand} </Text>
          <NutriscoreGradeCard />
          <NoteNutriscoreCard />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 100
  }
});

export default ProductsScreen;
