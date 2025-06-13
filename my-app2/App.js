//importaciones
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const Texto = (props) => {
  //propiedad contenido que hereda de texto.
  const { contenido } = props
  return (
    <Text> {contenido} </Text>
  )
}

//Main
export default function App() {
  return (
    //
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Texto contenido="hola"></Texto>
      <Text contenido="mundo"></Text>
      <Texto contenido="React native"></Texto>

      <Button title="Presioname"></Button>

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