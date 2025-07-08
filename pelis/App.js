// app/index.js - App con búsqueda Aproximada y Exacta
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Platform,
  StatusBar,
  Switch, // <<< CAMBIO AQUÍ: Importamos el componente Switch
} from 'react-native';
import axios from 'axios';

const App = () => {
  // --- Estados de la Aplicación ---
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [headerTitle, setHeaderTitle] = useState('Películas Populares');
  const [isExactSearch, setIsExactSearch] = useState(false); // <<< CAMBIO AQUÍ: Nuevo estado para el modo de búsqueda

  // --- Constantes de la API de TMDb ---
  const TMDB_API_KEY = 'cb1d3857dca56f795d2525071f570c91';
  const API_BASE_URL = 'https://api.themoviedb.org/3';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  // --- Funciones de la API ---

  const fetchPopularMovies = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
        params: {
          api_key: TMDB_API_KEY,
          language: 'es-MX',
        },
      });
      setMovies(response.data.results);
      setHeaderTitle('Películas Populares');
    } catch (err) {
      setError('No se pudieron cargar las películas populares.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const searchMovies = async () => {
    if (!searchQuery.trim()) {
      fetchPopularMovies();
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/search/movie`, {
        params: {
          api_key: TMDB_API_KEY,
          language: 'es-MX',
          query: searchQuery,
        },
      });

      // <<< CAMBIO AQUÍ: Lógica para filtrar los resultados
      let apiResults = response.data.results;

      if (isExactSearch) {
        // Si la búsqueda exacta está activa, filtramos los resultados
        apiResults = apiResults.filter(
          movie => movie.title.toLowerCase() === searchQuery.toLowerCase(),
        );
      }

      setMovies(apiResults);
      setHeaderTitle(`Resultados para: "${searchQuery}"`);
    } catch (err) {
      setError('Ocurrió un error durante la búsqueda.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  // --- Renderizado de Componentes ---

  const renderMovieItem = ({item}) => (
    <View style={styles.card}>
      <Image
        source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardInfo}>Lanzamiento: {item.release_date}</Text>
        <Text style={styles.cardInfo}>
          Calificación: ⭐ {item.vote_average.toFixed(1)} / 10
        </Text>
        <ScrollView style={styles.detailsScrollView}>
          <Text style={styles.detailText}>{item.overview}</Text>
        </ScrollView>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* --- Sección de Búsqueda --- */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar película por título..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={searchMovies}
        />
        <TouchableOpacity style={styles.button} onPress={searchMovies}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
      
      {/* // <<< CAMBIO AQUÍ: Añadimos el interruptor para la búsqueda exacta */}
      <View style={styles.optionsContainer}>
        <Text style={styles.switchLabel}>Búsqueda Exacta</Text>
        <Switch
          trackColor={{false: '#767577', true: '#01B4E4'}}
          thumbColor={isExactSearch ? '#f4f3f4' : '#f4f3f4'}
          onValueChange={() => setIsExactSearch(previousState => !previousState)}
          value={isExactSearch}
        />
      </View>


      {/* --- Título de la Lista y Indicador de Carga --- */}
      <View style={styles.listHeader}>
        <Text style={styles.title}>{headerTitle}</Text>
        {isLoading && <ActivityIndicator size="small" color="#032541" />}
      </View>

      {/* --- Lista de Películas o Mensaje de Error --- */}
      {!isLoading && error && <Text style={styles.errorText}>{error}</Text>}
      
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  searchContainer: {
    padding: 15,
    backgroundColor: '#032541',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 45,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#01B4E4',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // <<< CAMBIO AQUÍ: Estilos para el contenedor del Switch
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF'
  },
  switchLabel: {
    fontSize: 16,
    color: '#333'
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardImage: {
    width: 130,
    height: 200,
    backgroundColor: '#E0E0E0',
  },
  cardContent: {
    flex: 1,
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardInfo: {
    fontSize: 13,
    color: '#666',
  },
  detailsScrollView: {
    maxHeight: 80,
    marginTop: 10,
  },
  detailText: {
    fontSize: 13,
    color: '#555',
    lineHeight: 18,
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;