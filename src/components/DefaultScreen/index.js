import React from "react";
import defaultStyles from '../../styles/globalStyle';
import { KeyboardAvoidingView, StatusBar } from "react-native";

export default function DefaultScreen({ children }) {
    return <>
        <StatusBar />
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={defaultStyles.preencher}>
            {children}
        </KeyboardAvoidingView>
    </>
}