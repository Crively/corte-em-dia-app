import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Header(){
return (
<View style={styles.header}>
<Text style={styles.title}>Corte Em Dia App</Text>
</View>
);
}


const styles = StyleSheet.create({
header: { marginVertical: 12 },
title: { fontSize: 28, fontWeight: '700' },
});