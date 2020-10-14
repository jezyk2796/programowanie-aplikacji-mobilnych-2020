import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Nowe zadanie...'
                onChangeText={(val) => changeHandler(val)}
            />
            <Button
                onPress={() => submitHandler(text)}
                title='Dodaj zadanie'
                color='#6b4aff'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});
