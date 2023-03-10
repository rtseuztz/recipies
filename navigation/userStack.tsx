import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import HomeScreen from '../screens/Home';
import MyRecipes from '../screens/MyRecipes';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.stack,
        headerTintColor: "#fff"
      }}>
      <Stack.Screen
        name="RecipeBook"
        component={HomeScreen}
      />
      <Stack.Screen
        name="My Recipes"
        options={{
          headerStyle: {
            backgroundColor: "rgb(153, 5, 79)"
          },

        }}
        component={
          MyRecipes
        }
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  stack: {
    backgroundColor: "#0B3654",
  },

});