import React, { useState, useEffect } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/core";
// import Torch from "react-native-torch";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const [lampTorch, setLampTorch] = false;
  // const [turnOnTorch, setTurnOnTorch] = useState(true);
  // const [turnOffTorch, setTurnOffTorch] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("Product", {
      productScanned: data
    });
    setScanned(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end"
      }}
    >
      {/* <TouchableOpacity
        style={{
          width: 20,
          height: 20,
          backgroundColor: "#FF6F00",
          borderRadius: 7,

        }}
        onPress={() => {
          setTurnOnTorch(false);
          setTurnOffTorch(true);
        }}
      ></TouchableOpacity> */}

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
