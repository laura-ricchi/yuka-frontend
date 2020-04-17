import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import CameraScreen from "./containers/CameraScreen";
import FavoritesScreen from "./containers/FavoritesScreen";
import LogInScreen from "./containers/LogInScreen";
import ProductScreen from "./containers/ProductScreen";
import ProductsScreen from "./containers/ProductsScreen";
import SignUpScreen from "./containers/SignUpScreen";
import SplashScreen from "./containers/SplashScreen";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/core";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const navigation = useNavigation();
  // création de plusieurs états
  const [isLoading, setIsLoading] = useState(true);
  const [userHistory, setUserHistory] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [favorites, setFavorites] = useState(null);

  // création d'une const setToken
  const setToken = async (token) => {
    // s'il existe un token
    if (token) {
      // alors on enregistre dans la mémoire du téléphone le token lié à l'userToken
      AsyncStorage.setItem("userToken", token);
    } else {
      // sinon on supprime l'userToken
      AsyncStorage.removeItem("userToken");
    }
    // mise à jour de l'état de userToken avec la nouvelle valeur de token
    setUserToken(token);
  };
  // création d'une const ID
  const setId = async (id) => {
    // s'il existe un id
    if (id) {
      // alors on enregistre dans la mémoire du téléphone le l'id lié à l'userId
      AsyncStorage.setItem("userId", id);
    } else {
      // sinon on supprime l'userId
      AsyncStorage.removeItem("userId");
    }
    // mise à jour de l'état "setUserId" avec la nouvelle valeur id
    setUserId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const userHistory = await AsyncStorage.getItem("userHistory");
      setIsLoading(false);
      setUserHistory(userHistory);
    };
    fetchData();
  }, []);

  return (
    <ActionSheetProvider>
      <NavigationContainer>
        {isLoading ? null : userToken === null ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              options={{
                title: "Home",
                header: () => null,
              }}
            >
              {() => <SplashScreen />}
            </Stack.Screen>
            <Stack.Screen
              name="LogIn"
              options={{ header: () => null, animationEnabled: false }}
            >
              {() => <LogInScreen setId={setId} setToken={setToken} />}
            </Stack.Screen>
            <Stack.Screen
              name="SignUp"
              options={{ header: () => null, animationEnabled: false }}
            >
              {() => <SignUpScreen setId={setId} setToken={setToken} />}
            </Stack.Screen>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Tab" options={{ header: () => null }}>
              {() => (
                <Tab.Navigator
                  tabBarOptions={{
                    activeTintColor: "green",
                    inactiveTintColor: "black",
                    style: {
                      backgroundColor: "#F9F9F9",
                    },
                  }}
                >
                  <Tab.Screen
                    name="History"
                    options={{
                      tabBarLabel: "Historique",
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                          name={"carrot"}
                          size={30}
                          color={"#000000"}
                        />
                      ),
                    }}
                  >
                    {() => (
                      <Stack.Navigator>
                        <Stack.Screen
                          name="Products"
                          options={{
                            headerTitle: "Produits",
                            headerStyle: { backgroundColor: "#FFFFFF" },
                            headerTitleStyle: {
                              color: "#000000",
                              fontWeight: "bold",
                            },
                            headerTitleAlign: "center",
                            headerRight: () => (
                              <FontAwesome
                                name="sign-out"
                                color="#000"
                                size={35}
                                onPress={() => {
                                  setToken(null),
                                    AsyncStorage.removeItem("userToken"),
                                    AsyncStorage.removeItem("userId");
                                }}
                              />
                            ),
                          }}
                        >
                          {() => <ProductsScreen />}
                        </Stack.Screen>
                        <Stack.Screen
                          name="Product"
                          options={{
                            headerTitle: "Produit",
                            headerStyle: { backgroundColor: "#FFFFFF" },
                            headerTitleStyle: {
                              color: "#000000",
                              fontWeight: "bold",
                            },
                            headerTitleAlign: "center",
                            headerRight: () => (
                              <FontAwesome
                                name="heart"
                                color="#DF3A00"
                                size={30}
                                // onPress={() => {
                                //   navigation.navigate("Favorites");
                                // }}
                              />
                            ),
                          }}
                        >
                          {() => <ProductScreen />}
                        </Stack.Screen>
                      </Stack.Navigator>
                    )}
                  </Tab.Screen>
                  <Tab.Screen
                    name="Scan"
                    options={{
                      tabBarLabel: "Scan",
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                          name={"barcode-scan"}
                          size={30}
                          color={"#000000"}
                        />
                      ),
                    }}
                  >
                    {() => (
                      <Stack.Navigator>
                        <Stack.Screen
                          name="Camera"
                          options={{
                            title: "Scan",
                            headerTitleAlign: "center",
                            headerStyle: { backgroundColor: "#FFFFFF" },
                          }}
                        >
                          {() => <CameraScreen />}
                        </Stack.Screen>
                      </Stack.Navigator>
                    )}
                  </Tab.Screen>
                  <Tab.Screen
                    name="Favorites"
                    options={{
                      tabBarLabel: "Favoris",
                      tabBarIcon: ({ color, size }) => (
                        <AntDesign name={"heart"} size={25} color={"#000000"} />
                      ),
                    }}
                  >
                    {() => (
                      <Stack.Navigator>
                        <Stack.Screen
                          name="Favorites"
                          options={{
                            title: "Favoris",
                            headerStyle: { backgroundColor: "#FFFFFF" },
                            headerTitleStyle: {
                              color: "#000000",
                              fontWeight: "bold",
                            },
                            headerTitleAlign: "center",
                          }}
                        >
                          {() => <FavoritesScreen />}
                        </Stack.Screen>
                      </Stack.Navigator>
                    )}
                  </Tab.Screen>
                </Tab.Navigator>
              )}
            </Stack.Screen>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </ActionSheetProvider>
  );
}
