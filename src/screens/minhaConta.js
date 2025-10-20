import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function MinhaConta() {
return (
<View style={styles.container}>
<Text style={styles.title}>Minha Conta</Text>
<Text style={styles.text}>Aqui você poderá consultar seus agendamentos e histórico.</Text>
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, padding: 16, backgroundColor: '#fff' },
title: { fontSize: 22, fontWeight: '700', marginBottom: 10 },
text: { fontSize: 16 },
});