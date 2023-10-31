import React from "react";
import { TouchableOpacity, Text } from "react-native";
import funcDefaultStyles from './styles/btnStyle'

export default function Botao({ valor, acao, pequeno = false, invertido = false, estilos }) {
    const defaultStyles = funcDefaultStyles(pequeno, invertido)

    return <TouchableOpacity onPress={acao} style={[defaultStyles.botao, estilos]}>
        <Text style={defaultStyles.valor}>{valor}</Text>
    </TouchableOpacity>
}