import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Platform, Switch, Button } from "react-native";
import React, { useState } from "react";

const showAlert = (message) => {
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert('Alerta', message);
  }
};

const App = () => {
  const [activo, setActivo] = useState(false);

  const cambiarSwitch = () => {
    setActivo(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Button Test</Text>

      <View style={styles.section}>
        <Text style={styles.description}>Botón Básico</Text>
        <Button title="Presióname" onPress={() => showAlert("Botón presionado")} />
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Botón de color</Text>
        <Button title="Color púrpura" color="purple" onPress={() => showAlert("Botón de color presionado")} />
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Botón deshabilitado</Text>
        <Button title="Deshabilitado" disabled onPress={() => showAlert("No funciona :(")} />
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Dos botones:</Text>
        <View style={styles.buttonRow}>
          <Button title="Izquierda" onPress={() => showAlert("Botón izquierdo")} />
          <View style={styles.buttonSpacer} />
          <Button title="Derecha" onPress={() => showAlert("Botón derecho")} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Activar Característica:</Text>
        <Switch onValueChange={cambiarSwitch} value={activo} />
        <Text style={styles.statusText}>Estado actual: {activo ? 'Activado' : 'Desactivado'}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    marginVertical: 10,
    width: '100%',
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSpacer: {
    width: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  statusText: {
    marginTop: 10,
    fontSize: 18,
    color: '#555',
  },
});