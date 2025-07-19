import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View,TouchableOpacity, TouchableHighlight} from 'react-native';
import Task from './components/Tasks';
export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    setTaskItems ([...taskItems,task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemscopy = [...taskItems];
    itemscopy.splice(index , 1 );
    setTaskItems(itemscopy);
  }


    return (
    <View style={styles.container}>
      <View style= {styles.tasksWrapper}>
        <Text style = {styles.sectonTitle}> Today </Text>
        <View style = {styles.items}>
          {
            taskItems.map((item , index)=>{
               return( 
                <TouchableOpacity key = {index} onPress={() => completeTask(index)} >
                  <Task  text ={item}/> 
                </TouchableOpacity>   
              
            )})
          }
        </View>
      </View>
      <KeyboardAvoidingView behavior= {
        Platform.OS=== 'ios' ? "padding" : "height"} style ={styles.keybord}>
        <TextInput style= {styles.input} placeholder='Write a task' value= {task} onChangeText={text => setTask(text)}></TextInput>
       
       <TouchableOpacity onPress={() => handleAddTask()}>
          <View style ={styles.addwrapper}>
            <Text style ={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',

  },

  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20, 
  },
   sectonTitle:{
    fontSize: 24,
    fontWeight: 'bold'

   },
   items:{
    marginTop: 30,
   },
   keybord:{
    position: "absolute",
    bottom: 60,
    with:'100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',

   },
   input:{
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius: 60,
    borderColor:'#c0c0c0',
    borderWidth: 1,
    width: 370,

   },
   addwrapper:{
    width:50,
    height:50,
    backgroundColor:'#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems :'center',
    borderColor:'#c0c0c0',
    borderWidth: 1,

   },
   addtext:{},


});
