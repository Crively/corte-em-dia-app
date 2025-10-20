import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function BookingSection(){
return (
<View style={styles.card}>
<Text style={styles.heading}>Agende Seu Corte Aqui:</Text>
<Text style={styles.small}>*Qualquer cancelamento será cobrada uma taxa</Text>


<View style={styles.buttonsRow}>
<TouchableOpacity style={[styles.btn, styles.cancel]}>
<Text style={styles.btnText}>Cancelar Agendamento</Text>
</TouchableOpacity>


<TouchableOpacity style={[styles.btn, styles.ok]}>
<Text style={styles.btnText}>Agendar ✅</Text>
</TouchableOpacity>
</View>
</View>
);
}


const styles = StyleSheet.create({
card:{ backgroundColor:'#eee', padding:12, borderRadius:6, marginBottom:14 },
heading:{ fontWeight:'700', marginBottom:6 },
small:{ fontSize:12, marginBottom:8 },
buttonsRow:{ flexDirection:'row', justifyContent:'space-between' },
btn:{ paddingVertical:10, paddingHorizontal:12, borderRadius:6 },
cancel:{ backgroundColor:'#d9534f' },
ok:{ backgroundColor:'#5cb85c' },
btnText:{ color:'#fff', fontWeight:'600' }
});