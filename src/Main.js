import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Header from './components/Header/Header.js';
import ServicesCard from './components/servicos/servicos.js';
import BookingSection from './components/agenda/agenda.js';
import AccountCard from './components/conta/conta.js';
import ContactsCard from './components/contato/contato.js';


export default function Main() {
return (
<ScrollView contentContainerStyle={styles.container}>
<Header />
<ServicesCard />
<BookingSection />
<AccountCard />
<ContactsCard />
</ScrollView>
);
}


const styles = StyleSheet.create({
container: {
padding: 16,
backgroundColor: '#fff',
},
});