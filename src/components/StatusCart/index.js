import React from "react";
import styles from './statusCartStyle'
import { View, Text } from "react-native";
import Botao from '../Botao'

export default function StatusCart({ total }) {
    return <View style={styles.conteudo}>
        <View style={styles.total}>
            <Text style={styles.descricao}>Total do Carrinho: </Text>
            <Text style={styles.valor}>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(total)}</Text>
        </View>
        <View style={styles.botao}>
            <Botao valor='Concluir pedido' invertido estilos={{ borderRadius: 6 }} />
        </View>
    </View>
}