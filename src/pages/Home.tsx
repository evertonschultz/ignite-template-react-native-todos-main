import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [updateTask, setUpdateTask] = useState<Task[]>([]);
  const [themeDark, setThemeDark] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle !== '')
    {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      }
      setTasks(oldState => [...oldState, data]);
    } else{
      Alert.alert('Title is not available!');
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const index = tasks.find(task => task.id === id)
    
    if(index) {
      index.done = !index.done;
      setUpdateTask(tasks.slice());
      updateTask.splice(id - 1, 1, index);
      setUpdateTask([]);
      console.log(updateTask);
    }
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ))
  }

  function handleAddThemeDark() {
    setThemeDark(!themeDark);
  }

  useEffect(() => {
    Alert.alert("Clicando em 'do' em 'to.do' é possivel alterar entre o tema dark e light ");
  }, [themeDark]);

  return (
    <View style={themeDark ? {flex: 1, backgroundColor: '#10101E'} : {flex: 1}}>
      <Header onPress={handleAddThemeDark} themeDark={themeDark} />

      <TodoInput addTask={handleAddTask} themeDark={themeDark} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
        themeDark={themeDark} 
      />
    </View>
  )
}