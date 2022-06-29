import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{width: '25%'}}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          disabled={props.home ? true : false}>
            <AntDesign
              style={props.home ? {display: 'none'} : null}
              name='arrowleft'
              size={35}
              color={'#FFFBF4'}
              resizeMode='contain'
            />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        {props.title ? 
          <Text style={styles.text}>{props.title}</Text> 
          : null 
        }
      </View>
      <View style={{width: '25%', alignItems: 'flex-end'}}>
        <TouchableOpacity 
          onPress={() => console.log('open the damn filter')}
          disabled={props.filter ? false : true}>
            <Ionicons
              style={props.filter ? null : {display: 'none'}}
              name='filter'
              size={35}
              color={'#FFFBF4'}
              resizeMode='contain'
            />
        </TouchableOpacity>
      </View>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Platform.OS === 'web' ? '90vw' : null,
  },
  titleContainer: {
    alignItems: 'center',
    width: '50%',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFBF4',
  }
});
