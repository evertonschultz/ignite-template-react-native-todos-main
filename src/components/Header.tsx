import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

interface MyHeaderProps {
  themeDark: boolean;
  onPress: (press:  boolean) => void;
}

export function Header({themeDark, onPress}: MyHeaderProps) {
  return (
    <>
      <View style={themeDark ? styles.headerDark : styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <TouchableOpacity onPress={() => onPress(true)}>
          <Text style={[themeDark ? styles.headerTextDark : styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerDark: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#191932',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  headerTextDark: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold'
  }
});
