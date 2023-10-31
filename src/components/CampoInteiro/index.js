import React from "react";
import { TextInput } from "react-native";
import defaultStyles from './styles/campoStyle'

export default function CampoInteiro({ valor, action, estilos }) {
    const update = (newValue, returnAction) => {
        const verifyInteger = newValue.match(/^[0-9]*$/)
        if (!verifyInteger) return;

        const removeLeftZero = newValue.replace(/^(0)(.+)/, '$2')

        returnAction(removeLeftZero);
    }
    const numeroString = String(valor)

    return <TextInput
        keyboardType="number-pad"
        selectTextOnFocus
        value={numeroString}
        onChangeText={(newValue) => update(newValue, action)}
        removeClippedSubviews={false}
        style={[defaultStyles.campo, estilos]}
    />
}