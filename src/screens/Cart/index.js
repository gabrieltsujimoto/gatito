import React from "react";
import { FlatList } from "react-native";
import Item from "../../screens/Servicos/Item";
import DefaultScreen from "../../components/DefaultScreen";
import StatusCart from "../../components/StatusCart";

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "NÃO DÊ BANHO NO SEU GATO! Mas se precisar nós damos 😁",
        quantidade: 1
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.90,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas.",
        quantidade: 2
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 99.90,
        descricao: "Uma dose da vacina Antirrábica. Seu gato de precisa de uma por ano.",
        quantidade: 1
    }
]

export default function Cart() {
    const total = servicos.reduce((sum, { preco, quantidade }) => {
        return sum + (preco * quantidade)
    }, 0)
    return <>
        <DefaultScreen>
            <StatusCart total={total} />
            <FlatList
                data={servicos}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)} />
        </DefaultScreen>
    </>
}