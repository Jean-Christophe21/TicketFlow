import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../pages/SplashPage';
import TicketDetailsPage from '../pages/TiketDetails';


export type RootStackParamList = {
  Home: undefined;
  TicketDetails: { ticketId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomePage} 
          options={{ title: 'Mes Tickets' }}
        />
        <Stack.Screen 
          name="TicketDetails" 
          component={TicketDetailsPage} 
          options={{ title: 'Détails du Ticket' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}