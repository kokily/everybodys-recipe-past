import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import InitScreen from '../screens/InitScreen';
import MenuScreen from '../screens/MenuScreen';
import MaterialScreen from '../screens/MaterialScreen';
import RecipeScreen from '../screens/RecipeScreen';
import CostScreen from '../screens/CostScreen';
import AddMaterialScreen from '../screens/AddMaterialScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InitScreen"
        component={InitScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MaterialScreen"
        component={MaterialScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddMaterialScreen"
        component={AddMaterialScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CostScreen"
        component={CostScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
