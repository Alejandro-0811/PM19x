import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from './screens/home';
import Settings from './screens/settings';
import Profile from './screens/profile';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => ({
 
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Asigna un nombre de ícono según la ruta
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
    
          tabBarActiveTintColor: '#007BFF', 
          tabBarInactiveTintColor: 'gray',   
          headerShown: false, 
          tabBarStyle: {
            paddingBottom: 5,
            height: 60,
          },
        })}
      >
        
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}