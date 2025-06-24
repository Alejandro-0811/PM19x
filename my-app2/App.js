import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import { StyleSheet,Text, View, Button,ActivityIndicator } from "react-native";

export default function App() {
    const [cargando, setCargando] = useState(false);
    const [datos, setDatos] = useState(null);

    const SimularCarga = () => {
        setCargando (true);
        setDatos(null);

        setTimeout(() => {
            setCargando(false);
            setDatos("Datos cargados correctamente");
        }, 8000);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Activity Indicator :D</Text>
            <Button title='Cargador Datos' onPress={SimularCarga} color='#007AFF' />
        

        {cargando && (
            <ActivityIndicator size='large' color='#007AFF' styles={styles.loader} />
        )}
        
        {datos !== ''&&<text>{datos}</text>}
        <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});