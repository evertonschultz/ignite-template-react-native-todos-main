import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

function FlatListHeaderComponent({themeDark}: MyFlatListProp) {
  return (
    <View>
      <Text style={themeDark ? styles.headerDark : styles.header}>Minhas tasks</Text>
    </View>
  )
}

interface MyFlatListProp {
  themeDark: boolean;
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  themeDark: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, themeDark }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={themeDark ? item.done ? styles.taskButtonDoneDark : styles.taskButton : item.done ? styles.taskButtonDone : styles.taskButton}
          >
            <View 
              testID={`marker-${index}`}
              style={themeDark ? item.done ? styles.taskMarkerDone : styles.taskMarkerDark : item.done ? styles.taskMarkerDone : styles.taskMarker}
            />
            <Text 
              style={themeDark ? item.done ? styles.taskTextDone : styles.taskTextDark : item.done ? styles.taskTextDone : styles.taskText}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent themeDark={themeDark} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  headerDark: {
    color: '#565BFF',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#565BFF',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDark: {
    color: '#fff',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskButtonDoneDark: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(50, 50, 50, 0.4)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})