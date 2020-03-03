import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import CameraScreen from "./containers/CameraScreen";
import FavoritesScreen from "./containers/FavoritesScreen";
import ProductScreen from "./containers/ProductScreen";
import ProductsScreen from "./containers/ProductsScreen";
import SplashScreen from "./containers/SplashScreen";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { AsyncStorage } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userHistory, setUserHistory] = useState(null);

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
        {isLoading ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              options={{
                title: "Home",
                header: () => null
              }}
            >
              {() => <SplashScreen />}
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
                      backgroundColor: "#F9F9F9"
                    }
                  }}
                >
                  <Tab.Screen
                    name="Historic"
                    options={{
                      tabBarLabel: "Historic",
                      tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                          name={"carrot"}
                          size={30}
                          color={"#000000"}
                        />
                      )
                    }}
                  >
                    {() => (
                      <Stack.Navigator>
                        <Stack.Screen
                          name="Products"
                          options={{
                            title: "Products",
                            headerStyle: { backgroundColor: "#FFFFFF" },
                            headerTitleStyle: { color: "#000000" }
                          }}
                        >
                          {() => <ProductsScreen />}
                        </Stack.Screen>
                        <Stack.Screen
                          name="Product"
                          options={{
                            title: "Product",
                            headerStyle: { backgroundColor: "#FFFFFF" },
                            headerTitleStyle: { color: "#000000" }
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
                      )
                    }}
                  >
                    {() => (
                      <Stack.Navigator>
                        <Stack.Screen
                          name="Camera"
                          options={{
                            title: "Scan",
                            headerStyle: { backgroundColor: "#FFFFFF" }
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
                      tabBarLabel: "Favorites",
                      tabBarIcon: ({ color, size }) => (
                        <AntDesign name={"heart"} size={30} color={"#000000"} />
                      )
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
                            headerTitleAlign: "center"
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
