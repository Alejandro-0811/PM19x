import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";
import React, { useState } from "react";

const Texto = ({ style }) => {
  const [contenido, setContenido] = useState("Hola Mundo");
  const actualizarTexto = () => {
    setContenido("State Modificado");
  };
  return (
    <Text style={[styles.text, style]} onPress={actualizarTexto}>
      {" "}
      {contenido}{" "}
    </Text>
  );
};

export default function App() {
  const [contenido, setContenido] = useState("A ver tocame");
  const actualizarBoton = () => {
    setContenido("Aplastado");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Texto style={styles.rojo}></Texto>
      <Texto style={styles.verde}></Texto>
      <Texto style={styles.amarillo}></Texto>
      <Button onPress={actualizarBoton} title={contenido}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 28,
    width: 100,
    height: 100,
  },
  rojo: { backgroundColor: "red" },
  amarillo: { backgroundColor: "yellow" },
  verde: { backgroundColor: "green" },
});