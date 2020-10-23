import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Header from './components/header';
import TodoItem from './components/todoItem';
import AddToDo from './components/addToDo';


export default function App() {

  const [todo, setToDos] = useState([
    { key: '1', text: 'Math Assignment' },
    { key: '2', text: 'Buy Shoes' },
    { key: '3', text: 'CSE499 Project' },
    { key: '4', text: 'Computer vision Presentation' },
  ]);

  const onPressListener = (key) => {
    setToDos(prevToDos => {
      return prevToDos.filter(todo => todo.key != key);
    });
  };

  const submitListener = (text) => {
    setToDos((prevToDos) => {
      return [
        { text: text, key: Math.random(1, 100).toString },
        ...prevToDos
      ];
    });
  };


  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <AddToDo submitHandler={submitListener} />

        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={onPressListener} />
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
    backgroundColor: "#FFF",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  },
});
