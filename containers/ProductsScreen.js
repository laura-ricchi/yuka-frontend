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
import { ScrollView } from "react-native-gesture-handler";

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

        // let removeItem = await AsyncStorage.removeItem("userHistory", err =>
        //   console.log("UserHistory", err)
        // );

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
        <View style={styles.allProducts}>
          <Image source={{ uri: item.image }} style={styles.image}></Image>
          <View numberOfLines={2} style={styles.noteProduct}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productBrand}>{item.brand} </Text>
            <NutriscoreGradeCard nutriscore={item.noteNutriscore} />
            <NoteNutriscoreCard note={item.NoteNutriscore} />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 80,
    margin: 10
  },
  allProducts: {
    display: "flex",
    flexDirection: "row"
  },
  noteProduct: {
    marginTop: 15
  },
  productName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#272727"
  },
  productBrand: {
    marginTop: 5,
    color: "#ABAAAB"
  }
});

export default ProductsScreen;
