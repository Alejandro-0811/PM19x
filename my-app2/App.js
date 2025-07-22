import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [note, setNote] = useState("");
  const [database, setDatabase] = useState([]);

  const addNote = () => {
    if (note.trim() !== "") {
      setDatabase((prev) => [...prev, note]);
      setNote("");
      setModalVisible(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notas</Text>
      </View>

      <View style={styles.container}>
        <FlatList
          data={database}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <View style={styles.nota}>
              <Text>{item}</Text>
            </View>
          )}
          ListEmptyComponent={<Text>No hay notas aún.</Text>}
        />
        <StatusBar style="auto" />
      </View>

      {/* <View> para el <Button> */}
      <View style={styles.fabButton}>
        <Button
          title="Agregar nota"
          color="blue"
          onPress={() => setModalVisible(true)}
        />
      </View>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={{ marginBottom: 10 }}>Escribe tu nota:</Text>
            <TextInput
              value={note}
              onChangeText={setNote}
              placeholder="Escribe aquí..."
              style={styles.input}
            />
            <View style={styles.modalBotones}>
              <Button title="Guardar" color="#4caf50" onPress={addNote} />
              <Button
                title="Cancelar"
                color="#f44336"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "blue",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  fabButton: {
    position: "absolute",
    bottom: 60,
    right: 30,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
  },
  modalBotones: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nota: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
});
