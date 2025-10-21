import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function ServicesCard(){
return (
<View style={styles.card}>
<Text style={styles.heading}>Serviços:</Text>
<Text style={styles.item}>Corte - $30 </Text>
<Text style={styles.item}>Sobrancelha - $10</Text>
<Text style={styles.item}>Barba - $20</Text>
<Text style={styles.item}>Hidratação - $40</Text>
<Text style={styles.item}>Corte Infantil - $25</Text>
<Text style={styles.item}>Combo Corte+Barba - $40</Text>

</View>
);
}


const styles = StyleSheet.create({
card:{backgroundColor:'#f3be6eff', padding:12, borderRadius:20, marginBottom:14, borderColor:'#ffffffff', borderWidth:2,},
heading:{fontSize:24, fontWeight:'700', marginBottom:6},
item:{marginVertical:5, marginHorizontal:5, padding:1, fontSize:15, fontWeight:'500'},
});