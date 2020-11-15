// importowanie react i jego wybranych komponentow
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// eksportujemy komponent po to by importować go w App.js
export default function Header() {
    return (
        <View style={styles.header}>
            {/* style=... nadanie temu elementowi styli css znajdujących się pod wskazanym kluczem */}
            <Text style={styles.title}>Moje zadania</Text>
        </View>
    )
}

// style css dla tego komponentu
const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#6b4aff'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
