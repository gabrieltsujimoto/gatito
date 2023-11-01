import React from "react";
import { FlatList, KeyboardAvoidingView, Platform, StatusBar } from "react-native";
import Item from "./Item";
import defaultStyles from '../../styles/globalStyle'
import { cores } from '../../styles/globalStyle';
import Header from "../../components/Header";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "NÃO DÊ BANHO NO SEU GATO! Mas se precisar nós damos 😁"
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.90,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas."
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.90,
        descricao: "Uma dose da vacina Antirrábica. Seu gato de precisa de uma por ano."
    }
]

export default function Servicos() {
    return <>
        <StatusBar />
        <Header
            estilos={{
                backgroundColor: cores.roxo,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textColor: "#fff",
                maxHeight: "14.5%",
                padding: 24
            }} />
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={defaultStyles.preencher}>
            <FlatList
                data={servicos}
                renderItem={({ item }) => <Item {...item} btnTexto={"Adicionar ao Carrinho"} />}
                keyExtractor={({ id }) => String(id)} />
        </KeyboardAvoidingView>
    </>
}