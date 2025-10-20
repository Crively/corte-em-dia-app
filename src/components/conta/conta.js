import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function AccountCard(){
return (
<View style={styles.card}>
<Text style={styles.heading}>Minha Conta:</Text>
<Text>Consulte seus agendamentos e histórico</Text>
<TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Acessar Conta 🌐</Text></TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
card:{ backgroundColor:'#eee', padding:12, borderRadius:6, marginBottom:14 },
heading:{ fontWeight:'700', marginBottom:6 },
button:{ marginTop:8, backgroundColor:'#f0ad4e', padding:8, borderRadius:15 },
buttonText:{ color:'#fff', fontWeight:'700', textAlign:'center' }
});