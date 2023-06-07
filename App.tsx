/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Install React Navigation npm install @react-navigation/native
import { NavigationContainer } from "@react-navigation/native";
import List from "./app/screens/List";
import Details from "./app/screens/Details";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebaseConfig";

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='List' component={List} />

        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
