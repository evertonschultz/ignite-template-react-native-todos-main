import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  themeDark: boolean;
}

export function TodoInput({ addTask, themeDark }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View style={[themeDark ? styles.inputContainerDark : styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : themeDark ? false : styles.inputAndroidShadow]}>
      <TextInput 
        style={themeDark ? styles.inputDark: styles.input} 
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
        placeholderTextColor={themeDark ? '#E1E1E6' : '#A09CB1'}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={themeDark ? styles.addButtonDark : styles.addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainerDark: {
    backgroundColor: '#212136',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: '#34313D'
  },
  inputDark: {
    flex: 1,
    backgroundColor: '#212136',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: '#fff'
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonDark: {
    backgroundColor: '#565BFF',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});