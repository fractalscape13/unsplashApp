import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header() {

  const navigation = useNavigation();

  return (
    <View style={styles.mainHeaderWrapper}>
      <View style={{width: '25%'}}>
        <TouchableOpacity 
          onPress={() => { props.onBackPress ? props?.onBackPress() : navigation.goBack(); }}
          disabled={ props.home ? true : false}>
            <AntDesign
              style={props.home ? {display: 'none'} : null}
              name='arrowleft'
              size={35}
              color={BLACK}
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
      <View style={{width: '25%'}}/>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: width - 35,
  },
  titleContainer: {
    alignItems: 'center',
    width: '50%',
  },
  text: {
    fontSize: 18,
    fontWeight: '700'
  }
});
