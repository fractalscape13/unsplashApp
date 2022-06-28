import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Details({navigation}) {

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Image Details</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.pop()}>
        <Text style={styles.mainText}>Back</Text>
      </TouchableOpacity>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'slategrey',
  },
  mainText: {
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 35,
  },
});
