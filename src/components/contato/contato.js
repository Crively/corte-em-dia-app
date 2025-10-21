import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function ContactsCard(){
return (
<View style={styles.card}>
<Text style={styles.heading}>Contatos:</Text>
<Text style={styles.item}>•📱 Contato Fictício</Text>
<Text style={styles.item}>•📸 Rede fictícia</Text>
<Text style={styles.item}>•📍 Rua fictícia, Cidade fictícia</Text>
</View>
);
}


const styles = StyleSheet.create({
card:{ backgroundColor:'#f3be6eff', padding:12, borderRadius:20, marginBottom:24, borderColor:'#ffffffff', borderWidth:3 },
heading:{ fontWeight:'700', marginBottom:6, fontSize:24, },   

item:{ marginVertical:7, marginHorizontal:10, padding:1, fontSize:15, fontWeight:'500' },
});