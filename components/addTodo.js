import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState(''); // zainicjalizowany stan. Zmienna text pomoże śledzić co użytkownik wpisuje do inputa

    const changeHandler = (val) => {
        setText(val); // przez setText ustawiamy nową wartość, przekazaną w parametrze val
    };

    return (
        <View>
            {/* TextInput - komponent react native. Input do wprowadzania tekstu z klawiatury */}
            {/* onChangeText - uruchamia funkcję changeHandler() kiedy wpisujemy coś do inputa */}
            <TextInput
                style={styles.input}
                placeholder='Nowe zadanie...'
                onChangeText={(val) => changeHandler(val)}
            />
            {/* Button - po naciśnięciu przycisku wywujemy funkcję submitHandler(), a w argumencie podajemy tekst wprowadzony przez uzytkownika */}
            <Button
                onPress={() => submitHandler(text)}
                title='Dodaj zadanie'
                color='#6b4aff'
            />
        </View>
    )
}

// style css dla tego komponentu
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});
