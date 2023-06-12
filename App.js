import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';

import CalculaJuros from "./Componentes/CalculaJuros";


const Abas = createBottomTabNavigator();

const App = () => (
  
  <NavigationContainer >
    <Abas.Navigator>
      <Abas.Screen name="Juros" component = { CalculaJuros } 
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="percentage" size={24} color={color} />
        ),
      }}
      />
    </Abas.Navigator>
    
  </NavigationContainer>
  
);

export default App;