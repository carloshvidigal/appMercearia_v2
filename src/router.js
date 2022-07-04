import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from "react-native";
import { useCart } from "./context/cart";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Cart from "./pages/Cart";
import CartProvider from "./context/cart";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Routes(){
    return(
        
        <CartProvider>
            <NavigationContainer>
            <Stack.Navigator>
           
               <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
               /> 
               
               <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: true }}
                />

                <Stack.Screen
                    name='Cart'
                    component={Cart}
                    options={{ tabBarIcon: IconWithBadge }}
                />

            </Stack.Navigator>
        </NavigationContainer>
        </CartProvider>
        

    )

}

export default Routes;

function IconWithBadge () {

    const { cart } = useCart()

    return (
        <View style={{ width: 24, height: 24, margin: 5, alignItems: 'center', justifyContent: 'center'}} >
            <Text>{Object.keys(cart).length}</Text>
        </View>
    )
}