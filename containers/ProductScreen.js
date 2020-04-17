import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
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

// Ecran -> affichage fiche produit après scan du code barre
// création d'une fonction
const ProductScreen = () => {
  // transmission de params
  const { params } = useRoute();
  // création d'états
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  // utilisation d'useEffect - seulement au premier téléchargement du composant
  useEffect(() => {
    // fonction de recherche de données depuis l'API
    const fetchData = async () => {
      try {
        // lancement de récupération des données depuis l'API et le produit scanné avec une requête axios en get
        const response = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${params.productScanned}.json`
        );
        // mise à jour de l'état "setData" avec la réponse
        setData(response.data);
        // création d'un objet et stockage des infos récupérées de l'API
        let objToStock = {
          code: response.data.product.code,
          name: response.data.product.product_name,
          brand: response.data.product.brands,
          noteNutriscore: response.data.product.nutriscore_data.grade,
          image: response.data.product.image_front_url,
        };

        // création d'une variable pour récupérer une chaîne de caractères enregistrée dans la mémoire du téléphone
        let recupAsync = await AsyncStorage.getItem("userHistory");
        // si ce n'est pas une chaîne de caractères
        if (recupAsync === null) {
          // alors création d'un tableau
          let tab = [];
          // ajout des éléments de l'objet "objToStock" au début du tableau "tab"
          tab.unshift(objToStock);
          // enregistre dans la mémoire du téléphone "userHistory" et conversion du tableau en chaine de caractères
          await AsyncStorage.setItem("userHistory", JSON.stringify(tab));
        } else {
          // sinon création d'une variable "stringTab" et récupération d'une chaîne de caractères enregistrée dans "userHistory"
          let stringTab = await AsyncStorage.getItem("userHistory");
          // création d'une variable "tab" et conversion du tableau de chaine de caractères en objet JS
          let tab = JSON.parse(stringTab);
          // ajout d'une boucle pour éviter les doublons dans l'affichage des produits scannés
          for (let i = 0; i < tab.length; i++) {
            if (tab[i].code === response.data.product.code) {
              tab.splice(i, 1);
            }
          }
          // ajout des éléments "objToStock" dans le tableau
          tab.unshift(objToStock);
          // enregistre dans la mémoire du téléphone "userHistory" et conversion du tableau en chaine de caractères
          await AsyncStorage.setItem("userHistory", JSON.stringify(tab));
        }
        // informer que les données ont bien chargées - l'état est mis à jour (false)
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    // récupération des données via le scan du code barre
    fetchData();
  }, [params.productScanned]);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
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
    width: 100,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#272727",
  },
  productBrand: {
    marginTop: 5,
    color: "#ABAAAB",
  },
  qualities: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  defaults: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  textQualities: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
  },
  textDefaults: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
  },
});

export default ProductScreen;
