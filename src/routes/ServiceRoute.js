import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Servicos from "../screens/Servicos";
import Cart from "../screens/Cart";
import { cores } from "../styles/globalStyle";

export default function ServiceRoute() {
    const BottomNav = createBottomTabNavigator();
    return (
        <BottomNav.Navigator
            tabBarOptions={{
                activeTintColor: cores.roxo, inactiveTintColor: cores.claro, labelStyle: {
                    width: '100%',
                    flex: 1,
                    marginTop: 3,
                    paddingTop: 21,
                    backgroundColor: cores.laranja,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 21,
                }
            }}
        >
            <BottomNav.Screen name="Serviços" component={Servicos} />
            <BottomNav.Screen
                name="Cart"
                component={Cart} />
        </BottomNav.Navigator>
    )
}