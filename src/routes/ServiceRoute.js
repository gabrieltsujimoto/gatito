import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Servicos from "../screens/Servicos";
import Cart from "../screens/Cart";

export default function ServiceRoute() {
    const BottomNav = createBottomTabNavigator();
    return (
        <BottomNav.Navigator>
            <BottomNav.Screen name="Serviços" component={Servicos} />
            <BottomNav.Screen
                name="Cart"
                component={Cart} />
        </BottomNav.Navigator>
    )
}