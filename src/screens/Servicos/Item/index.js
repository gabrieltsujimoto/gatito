import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from './styles/itemStyle.js'
import CampoInteiro from "../../../components/CampoInteiro/index.js";
import Botao from "../../../components/Botao/index.js";

export default function Item({ nome, preco, descricao, quantidade: initialQtd = 1 }) {
    const [qtd, setQtd] = useState(initialQtd);

    return <>
        <View style={styles.informacao} >
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.preco}>
                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)}
            </Text>
        </View>
        <View style={styles.carrinho}>
            <View>
                <View style={styles.valor}>
                    <Text style={styles.descricao}>Quantidade: </Text>
                    <CampoInteiro valor={qtd} action={setQtd} estilos={styles.quantidade} />
                </View>
                <View style={styles.valor}>
                    <Text style={styles.descricao}>Total: </Text>
                    <Text style={styles.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(initialQtd * preco)}</Text>
                </View>
            </View>
            <Botao estilos={{ borderRadius: 12 }} valor="Remover ao carrinho" acao={() => console.log('Pressionado')} />
        </View>
        <View style={styles.divisor}>
        </View>
    </>
}