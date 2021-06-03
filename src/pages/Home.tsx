import React, { useState } from 'react';
import { Alert } from 'react-native';

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
    const index = tasks.find(fruit => fruit.id === id)

    if(index) {
      index.done = !index.done;
      setUpdateTask(tasks);
      updateTask.splice(id, 1, index);
      setTasks(updateTask);
    }
  }

  function handleRemoveTask(id: number) {
    setTasks(OldState => OldState.filter(
      task => task.id !== id
    ))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}