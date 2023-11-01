import React from "react";
import { View, Text } from "react-native";
import defaultStyles from '../../styles/globalStyle'

export default function Header({ estilos }) {
    return <>
        <View style={[defaultStyles.preencher, estilos]}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>Gatito App</Text>
        </View>
    </>
}