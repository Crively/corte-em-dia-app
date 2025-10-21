import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function AccountCard(){
return (
<View style={styles.card}>
<Text style={styles.heading}>Minha Conta:</Text>
<Text style={styles.item}>Consulte seus agendamentos e histórico</Text>
<TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Acessar Conta 🌐</Text></TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
card:{ backgroundColor:'#f3be6eff', padding:12, borderRadius:20, marginBottom:14, borderColor:'#ffffffff', borderWidth:2 },
heading:{ fontWeight:'700', marginBottom:6, fontSize:24 },
item:{ marginVertical:7, marginHorizontal:10, padding:1, fontSize:15, fontWeight:'500' },
button:{ marginTop:8, backgroundColor:'#000000ff', padding:8, borderRadius:15 },
buttonText:{ color:'#fff', fontWeight:'700', textAlign:'center' }
});