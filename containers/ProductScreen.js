import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import axios from "axios";
import { useRoute } from "@react-navigation/core";
import { AsyncStorage } from "react-native";
import NutriscoreGradeCard from "../components/NutriscoreGradeCard";
import NoteNutriscoreGrade from "../components/NoteNutriscoreGrade";
import BioProductCard from "../components/BioProductCard";
import QualityCard from "../components/QualityCard";
import DefaultCard from "../components/DefaultCard";
import MeasureProduct from "../components/MeasureProduct";

const ProductScreen = () => {
  const { params } = useRoute();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${params.productScanned}.json`
        );
        setData(response.data);

        let objToStock = {
          code: response.data.product.code,
          name: response.data.product.product_name,
          brand: response.data.product.brands,
          noteNutriscore: response.data.product.nutriscore_data.grade,
          image: response.data.product.image_front_url
        };
        let recupAsync = await AsyncStorage.getItem("userHistory");
        if (recupAsync === null) {
          let tab = [];
          tab.push(objToStock);
          await AsyncStorage.setItem("userHistory", JSON.stringify(tab));
        } else {
          let stringTab = await AsyncStorage.getItem("userHistory");
          let tab = JSON.parse(stringTab);
          tab.push(objToStock);
          await AsyncStorage.setItem("userHistory", JSON.stringify(tab));
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [params.productScanned]);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <ScrollView style={{ flex: 1 }}>
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
          <Text numberOfLines={2} style={styles.productName}>
            {data.product.product_name}
          </Text>
          <Text style={styles.productBrand}>{data.product.brands} </Text>
          <View style={{ flexDirection: "row" }}>
            <NutriscoreGradeCard nutriscore={data.product.nutriscore_grade} />
            <View style={{ marginTop: 15 }}>
              <NoteNutriscoreGrade note={data.product.nutriscore_grade} />
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.qualities}>
          <Text style={styles.textQualities}>Qualités</Text>
          <MeasureProduct measure={data.product.nutrition_data_per} />
        </View>
        <View>
          <BioProductCard bioProduct={data.product.labels} />
          <QualityCard
            quality={data.product.nutriscore_data}
            qualityNutriments={data.product.nutriments}
          />
        </View>

        <View style={styles.defaults}>
          <Text style={styles.textDefaults}>Défauts</Text>
          <MeasureProduct measure={data.product.nutrition_data_per} />
        </View>
        <View>
          <DefaultCard
            defaults={data.product.nutriscore_data}
            defaultsNutriments={data.product.nutriments}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 15,
    height: 150,
    width: 100
  },
  productName: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#272727"
  },
  productBrand: {
    marginTop: 5,
    color: "#ABAAAB"
  },
  qualities: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  defaults: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  textQualities: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10
  },
  textDefaults: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10
  }
});

export default ProductScreen;
