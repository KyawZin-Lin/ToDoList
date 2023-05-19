// First React Native Project
import React, { useEffect, useState,} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,Alert
,TouchableWithoutFeedback,Keyboard} from "react-native";
import Header from "./component/header";
import ToDoItem from "./component/todoitem";
import Form from "./component/form";
import SandBox from "./component/sandBox";
export default function App() {
  const [todos, setTodos] = useState([
    // { text: "to buy coffee", id: "1" },
    // { text: "to create react app", id: "2" },
    // { text: "to make more practice", id: "3" },
    // { text: "to buy a house", id: "4" },
  ]);


const pressHandler=(id)=>{


  setTodos((todos)=>{
    return todos.filter(todos=>todos.id!=id)

  })
}

const submitHandler=(text)=>{
  // console.log(text);
  if(text!==""){
    setTodos((todos)=>{
      console.log(todos);
      return [
        {text:text,id:Math.random().toString()},
        ...todos
        
      ]
      
    })
  }else{
    Alert.alert('OPPS!',"Need To Fill Input ",[
      {text:"Agree",onPress:()=>console.log('alert closed')}
    ])
  }
 
 
}
  return (
    // <SandBox/>
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss()
      }}>
          <View style={styles.container}>
            <Header />
          
            <View style={styles.content}>
            <Form submitHandler={submitHandler}/>
              <View style={styles.list}>
                <FlatList
                  data={todos}
                  renderItem={({ item }) =>
                  
                  <ToDoItem value={item} pressHandler={pressHandler}/>}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex:1,
    padding: 40,
   
  },
  list: {
    flex:1,
   
    marginTop: 20,
   
  },
});
