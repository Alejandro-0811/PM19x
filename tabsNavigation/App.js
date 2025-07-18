import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/home';
import Settings from './screens/settings';
import Profile from './screens/profile';
import Details from './screens/details'; 

const Tab = createBottomTabNavigator();
const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <ProfileStack.Screen name="Details" component={Details} options={{ title: 'Detalles de Usuario' }} />
    </ProfileStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'ProfileTab') {
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
        <Tab.Screen name="ProfileTab" component={ProfileStackScreen} options={{ title: 'Profile' }} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}