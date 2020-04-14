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
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { AsyncStorage, Button } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userHistory, setUserHistory] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const setToken = async (token) => {
    if (token) {
      AsyncStorage.setItem("userToken", token);
    } else {
      AsyncStorage.removeItem("userToken");
    }
    setUserToken(token);
  };

  const setId = async (id) => {
    if (id) {
      AsyncStorage.setItem("userId", id);
    } else {
      AsyncStorage.removeItem("userId");
    }
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
                            title: "Produits",
                            headerStyle: { backgroundColor: "#FFFFFF" },
                            headerTitleStyle: { color: "#000000" },
                            headerTitleAlign: "center",
                            headerRight: ({ color }) => {
                              <Button
                                onPress={() => alert("This is a button!")}
                                title="Deconnexion"
                                color={"#000000"}
                              />;
                            },
                          }}
                        >
                          {() => <ProductsScreen />}
                        </Stack.Screen>
                        <Stack.Screen
                          name="Product"
                          options={{
                            title: "Produit",
                            headerStyle: { backgroundColor: "#FFFFFF" },
                            headerTitleStyle: { color: "#000000" },
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
                            title: "Favorites",
                            headerStyle: { backgroundColor: "#FFFFFF" },
                            headerTitleStyle: { color: "#000000" },
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
