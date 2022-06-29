import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';

export default function FilterModal(props) {
  const [colorValue, setColorValue] = useState(props.colorFilter);
  const [orientationValue, setOrientationValue] = useState(props.orientationFilter);

  const closeModalWithFilters = () => {
    props.setColorFilter(colorValue);
    props.setOrientationFilter(orientationValue);
    props.closeModal();
  };

  return (
    <Modal
      isVisible
      backdropOpacity={0.7}
      onBackdropPress={() => props.closeModal()}>
      <View style={styles.container}>
        <Text style={styles.text}>Filter by:</Text>
        <SelectDropdown 
          data={['landscape', 'portrait', 'squarish']}
          defaultButtonText={'Choose orientation'}
          defaultValue={orientationValue}
          renderDropdownIcon={() => <AntDesign name="down" size={24} color="black" />}
          dropdownStyle={styles.dropdownStyle}
          rowTextStyle={styles.rowTextStyle}
          onSelect={selectedItem => {
            setOrientationValue(selectedItem);
          }}
          buttonTextAfterSelection={() => {
            return orientationValue;
          }}
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
        />
        <SelectDropdown 
          data={['black_and_white', 'black', 'white', 'yellow', 'orange', 'red', 'purple', 'magenta', 'green', 'teal', 'blue']}
          defaultButtonText={'Choose color'}
          defaultValue={colorValue}
          renderDropdownIcon={() => <AntDesign name="down" size={24} color="black" />}
          dropdownStyle={styles.dropdownStyle}
          rowTextStyle={styles.rowTextStyle}
          onSelect={selectedItem => {
            setColorValue(selectedItem);
          }}
          buttonTextAfterSelection={() => {
            return colorValue;
          }}
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
        />
        <TouchableOpacity style={styles.button} onPress={() => closeModalWithFilters()}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 355,
    top: 200,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFBF4',
    borderRadius: 12,
    paddingVertical: 25,
  },
  button: {
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
  },
  text: {
    fontSize: 22,
    color: '#000',
    fontWeight: '500',
    marginBottom: 20,
  },
  dropdownStyle: {
    color: 'red'
  },
  rowTextStyle: {
    width: 300,
  },
  buttonStyle: {
    width: '90%',
  },
  buttonTextStyle: {
    fontSize: 14,
  },
});
