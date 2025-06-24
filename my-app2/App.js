//TextInput y Alert en React Native

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";

const App = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");

  const mostrarAlerta = () => {
    if (!nombre || !email || !password) {
      if (Platform.OS === "web") {
        window.alert("Por favor, completa todos los campos obligatorios.");
      } else {
        Alert.alert(
          "Error",
          "Por favor, completa todos los campos obligatorios.",
          [{ text: "OK" }]
        );
      }
    } else {
      if (Platform.OS === "web") {
        window.alert(`Registro exitoso\nNombre: ${nombre}\nEmail: ${email}`);
        limpiarFormulario();
      } else {
        Alert.alert("Registro exitoso", `Nombre: ${nombre}\nEmail: ${email}`, [
          { text: "OK", onPress: () => limpiarFormulario() },
        ]);
      }
    }
  };

  const limpiarFormulario = () => {
    setNombre("");
    setEmail("");
    setPassword("");
    setTelefono("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formulario}>
        <Text style={styles.titulo}>Registro de Usuario</Text>

        {/* TextInput para nombre */}
        <TextInput
          style={styles.input}
          placeholder="Nombre completo *"
          value={nombre}
          onChangeText={setNombre}
        />

        {/* TextInput para email (con teclado de email) */}
        <TextInput
          style={styles.input}
          placeholder="Email *"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* TextInput para contraseña (secureTextEntry) */}
        <TextInput
          style={styles.input}
          placeholder="Contraseña *"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* TextInput para teléfono (keyboardType numérico) */}
        <TextInput
          style={styles.input}
          placeholder="Teléfono (opcional)"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
        />

        {/* Botón para enviar el formulario */}
        <Button title="Registrarse" onPress={mostrarAlerta} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  formulario: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
});

export default App;