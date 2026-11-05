import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Accueil</Text>
    </View>
  );
}

function TicketScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Tickets</Text>
    </View>
  );
}

function AjouterScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Ajouter</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Profil</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName =
            route.name === 'Accueil'
              ? focused
                ? 'home'
                : 'home-outline'
              : route.name === 'Recherche'
                ? focused
                  ? 'search'
                  : 'search-outline'
                : route.name === 'Profil'
                  ? focused
                    ? 'person'
                    : 'person-outline'
                  : 'home';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF', 
        tabBarInactiveTintColor: 'gray', 
        headerShown: false, 
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Ticket" component={TicketScreen} />
      <Tab.Screen name="Ajouter" component={AjouterScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});