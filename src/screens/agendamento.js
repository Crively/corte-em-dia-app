import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';


export default function Agendamento() {
const [name, setName] = useState('');
const [service, setService] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');


const handleSubmit = () => {
if (!name || !service || !date) {
Alert.alert('Erro', 'Por favor, preencha todos os campos.');
return;
}
Alert.alert('Sucesso', `Serviço agendado para ${name} em ${date} às ${time} - ${service}`);
setName('');
setService('');
setDate('');
setTime('');
};


return (
<View style={styles.container}>
<Text style={styles.title}>Agende seu corte</Text>


<TextInput
style={styles.input}
placeholder="Seu nome"
value={name}
onChangeText={setName}
/>


<TextInput
style={styles.input}
placeholder="Serviço desejado (ex: Corte, Barba)"
value={service}
onChangeText={setService}
/>


<TextInput
style={styles.input}
placeholder="Data do agendamento (ex: 25/10/2025)"
value={date}
onChangeText={setDate}
/>

<TextInput
style={styles.input}
placeholder="Hora do agendamento (ex: 14:30)"
value={time}
onChangeText={setTime}
/>


<TouchableOpacity style={styles.button} onPress={handleSubmit}>
<Text style={styles.buttonText}>Confirmar Agendamento</Text>
</TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
padding: 16,
backgroundColor: '#fff',
},
title: {
fontSize: 22,
fontWeight: '700',
marginBottom: 20,
},
input: {
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 6,
padding: 10,
marginBottom: 12,
},
button: {
backgroundColor: '#5cb85c',
padding: 14,
borderRadius: 6,
alignItems: 'center',
},
buttonText: {
color: '#fff',
fontWeight: '700',
},
}); 