//importaciones
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

  const Texto = () => {
    //propiedad contenido que hereda de texto (solo se pueden heredar las propiedasdes, states no).
    return


  }

//Main
export default function App() {
  const [contenido, setContenido] = useState('Hola  Mundo');
  const actualizaTexto = () => { setContenido('State Modificado') }
  return (
    //
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>

      <Button onPress={actualizaTexto} title={contenido} ></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});