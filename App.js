// importowanie react i jego wybranych komponentow
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

// importowanie komponentów utworzonych
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo'

export default function App() {

  // defaultowo ustawione dane
  const [todos, setTodos] = useState([ // useState - hook pozwalający na wykorzystanie stanu, bez użycia klas
    // todos - zmienna stanu
    // setTodos - funkcja aktualizująca stan
    { text: 'zrobić herbatę', key: '1' }, // każdy obiekt to nasze zadanie
    {text: 'zrobić zadanie', key: '2'},
    {text: 'wysłać zadanie', key: '3'}
  ]);

  const pressHandler = (key) => { // funkcja przekazywana do props komponentu TodoItem
    setTodos((prevTodos) => { // prevTodos - "stare" elementy listy
      return prevTodos.filter(todo => todo.key !== key); // funkcją filter przechodzimy po elementach aktualnego stanu i wyciągamy element, ktory ma taki klucz jaki przekazaliśmy w argumencie funkcji pressHandler(). Metoda filter zwroci tablice bez wyciągniętego elementu. Obsługujemy w ten sposob usuwanie klikniętych elementow
    });
  };

  const submitHandler = (text) => { // funkcja dodająca elementy do naszej listy. Parametr text to tekst wprowadzony przez uzytkownika, który przychodzi z komponentu AddTodo
    if (text.length >= 3) {
      setTodos((prevTodos) => {
        return [ // zwracamy nową tablicę z poprzednimi obiektami (...prevTodos), ale przed tym dodajemy nowy obiekt z tekstem z inputa, oraz kluczem wylosowanym przez metodę Math.random(). Nowa tablica zastąpi starą w naszym state
          {
            text: text,
            key: Math.random().toString()
          },
          ...prevTodos
        ]
      });
    } else { // jeśli uzytkownik wpisze mniej niz 3 znaki na ekranie wyświetli się alert, a zadanie nie zostanie dodane do listy
      Alert.alert('Ups!', 'Tytuł zadania powinien mieć przynajmniej 3 znaki', [
        {text: 'Rozumiem', onPress: () => console.log('alert closed')}
      ]);
    }
  };

  return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
      {/* TouchableWithoutFeedback - komponent który "owija" całą aplikację i pozwala reagować na kliknięcia */}
      {/* onPress => Keyboard.dismiss() - dzięki temu zabiegowi mozemy zamknąć klawiaturę klikając w tą część ekranu na której klawiatury nie ma, nie musimy szukać specjalnego przycisku do zwijania klawiatury */}

      {/* View - komponent React Native. Kontener do budowania layoutu */}
        <View style={styles.container}>
        {/* Header - uzycie utworzonego komponentu */}
          <Header />
          <View style={styles.content}>
            {/* AddTodo - przekazujemy funkcję submitHandler jako props do tego komponentu */}
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
            {/* FlatList - komponent tworzący listę */}
            {/* data={todos} - przekazujemy nasze zadania do listy */}
            {/* renderItem - funkcja renderująca elementy listy */}
            {/* TodoItem - przekazujemy element "item" przez props "item" do komponentu TodoItem, podobnie jak funkcję pressHandler() przez props pressHandler */}
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <TodoItem item={item} pressHandler={pressHandler}/>
                )}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
  );
}

// style css dla aplikacji
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
