import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function ServicesCard(){
return (
<View style={styles.card}>
<Text style={styles.heading}>Serviços:</Text>
<Text style={styles.item}>Corte - $30 Sobrancelha - $10</Text>
<Text style={styles.item}>Barba - $20 Hidratação - $40</Text>
<Text style={styles.item}>Combo Corte+Barba - $40</Text>
</View>
);
}


const styles = StyleSheet.create({
card:{
backgroundColor:'#eee',
padding:12,
borderRadius:6,
marginBottom:14
},
heading:{fontWeight:'700', marginBottom:6},
item:{marginVertical:2}
});