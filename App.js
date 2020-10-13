import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'zrobić herbatę', key: '1'},
    {text: 'zrobić zadanie', key: '2'},
    {text: 'wysłać zadanie', key: '3'}
  ]);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => ( // destrukturyzacja tablicy po której iterujemy
                <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
