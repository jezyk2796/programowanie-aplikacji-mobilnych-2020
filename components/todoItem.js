// importowanie react i jego wybranych komponentow
import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from "react-native";

export default function TodoItem({ item, pressHandler }) { // {} - destrukturyzacja obiektu otrzymanego z props. Otrzymujemy poprzez props element listy z App.js

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
        {/* TouchableOpacity - wrapper umożliwiający widokom reagowanie na dotknięcie ekranu. onPress - wywołanie funkcji przekazanej w props i przekazanie do niej klucza danego elementu */ }
            <Text style={styles.item}>{item.text}</Text>
            {/* Text - wyświetlamy ostylowaną zawartość item.text. Dzięki pressHandler() możemy reagować na kliknięcie/dotknięcie */}
        </TouchableOpacity>
    )
}

// style css dla tego komponentu
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#bbb',
        borderRadius: 10
    }
});
