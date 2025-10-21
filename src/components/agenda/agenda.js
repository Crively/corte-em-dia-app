import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Agenda(){
const navigation = useNavigation();


return (
<View style={styles.card}>
<Text style={styles.heading}>Agendamento</Text>
<Text style={styles.small}>*Qualquer cancelamento será cobrada uma taxa*</Text>


<View style={styles.buttonsRow}>
<TouchableOpacity style={[styles.btn, styles.cancel]}>
<Text style={styles.btnText}>Cancelar Agendamento </Text>
</TouchableOpacity>


<TouchableOpacity style={[styles.btn, styles.ok]} onPress={() => navigation.navigate('Agendamento')}>
<Text style={styles.btnText}>Agendar ✅</Text>
</TouchableOpacity>
</View>
</View>
);
}


const styles = StyleSheet.create({
card:{ backgroundColor:'#3C2A21', padding:12, borderRadius:20, marginBottom:14,borderColor:'#C89F7B', borderWidth:2 },
heading:{ fontWeight:'700', marginBottom:6, fontSize:24, color: '#C89F7B' },
small:{ fontSize:15, marginBottom:8, fontWeight:'500', color: '#D3C6B5' },
buttonsRow:{ flexDirection:'row', justifyContent:'space-between' },
btn:{ paddingVertical:12, paddingHorizontal:12, borderRadius:15 },
cancel:{ backgroundColor:'#ee3a37ff' },
ok:{ backgroundColor:'#5cb85c' },
btnText:{ color:'#ffffffff', fontWeight:'600' }
});