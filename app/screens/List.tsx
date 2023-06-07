/** @format */

import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { addDoc, collection } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";
import { TextInput } from "react-native";

const List = ({ navigation }: any) => {
  //   useEffect(() => {
  //     addDoc(collection(FIRESTORE_DB, "todo"), { title: "I am a test", done: false });
  //   }, []);

  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState("");
  const addTodo = async () => {
    const doc = addDoc(collection(FIRESTORE_DB, "todos"), { title: todo, done: false });
    setTodo("");
  };
  return (
    <View style={styles.container}>
      {/* <Text>List</Text> */}
      {/* <Button onPress={() => navigation.navigate("Details")} title='Open Details' /> */}
      {/* <Button onPress={() => addTodo()} title='Add Todo' /> */}

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Add new todo' onChangeText={(text: string) => setTodo(text)} value={todo} />
        {/* <Button onPress={addTodo} title='Add Todo' disabled={todo === ""} /> */}

        <Button style={styles.button} mode='contained' icon='plus' theme={{ colors: { primary: "#D70F64" } }} onPress={addTodo} disabled={todo === ""}>
          Add
        </Button>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  form: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderRadius: 4,
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    borderRadius: 4,

    flexDirection: "row",
    flexWrap: "wrap",

    height: 40,
  },
});
