import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function ContactsCard(){
return (
<View style={styles.card}>
<Text style={styles.heading}>Contatos:</Text>
<Text>•📱 Contato Fictício</Text>
<Text>•📸 Rede fictícia</Text>
<Text>•📍 Rua fictícia, Cidade fictícia</Text>
</View>
);
}


const styles = StyleSheet.create({
card:{ backgroundColor:'#eee', padding:12, borderRadius:6, marginBottom:24 },
heading:{ fontWeight:'700', marginBottom:6 }
});