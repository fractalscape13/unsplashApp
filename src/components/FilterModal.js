import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';

export default function FilterModal(props) {

  const closeModalWithFilters = () => {
    props.submitSearch();
    props.closeModal();
  };

  const cancelFilters = () => {
    if (props.colorFilter || props.orientationFilter) {
        props.clearFilterSearch();
    }
    props.closeModal();
  }

  return (
    <Modal
      isVisible
      backdropOpacity={0.7}
      onBackdropPress={() => props.closeModal()}>
      <View style={styles.container}>
        <Text style={styles.text}>Filter by:</Text>
        <TouchableOpacity style={styles.xContainer} onPress={() => props.closeModal()}>
          <Text style={styles.xText}>X</Text>
        </TouchableOpacity>
        <SelectDropdown 
          data={['landscape', 'portrait', 'squarish']}
          defaultButtonText={'Choose orientation'}
          defaultValue={props.orientationFilter}
          renderDropdownIcon={() => <AntDesign name="down" size={24} color="black" />}
          dropdownStyle={styles.dropdownStyle}
          rowTextStyle={styles.rowTextStyle}
          onSelect={selectedItem => {
            props.setOrientationFilter(selectedItem);
          }}
          buttonTextAfterSelection={() => {
            return props.orientationFilter;
          }}
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
        />
        <SelectDropdown 
          data={['black_and_white', 'black', 'white', 'yellow', 'orange', 'red', 'purple', 'magenta', 'green', 'teal', 'blue']}
          defaultButtonText={'Choose color'}
          defaultValue={props.colorFilter}
          renderDropdownIcon={() => <AntDesign name="down" size={24} color="black" />}
          dropdownStyle={styles.dropdownStyle}
          rowTextStyle={styles.rowTextStyle}
          onSelect={selectedItem => {
            props.setColorFilter(selectedItem);
          }}
          buttonTextAfterSelection={() => {
            return props.colorFilter;
          }}
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
        />
        <TouchableOpacity style={styles.button} onPress={() => closeModalWithFilters()}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => cancelFilters()}>
          <Text style={styles.buttonText}>Clear filters</Text>
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
    backgroundColor: '#131A27',
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
    borderColor: '#AEC5FA',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#AEC5FA',
  },
  text: {
    fontSize: 22,
    color: '#FFFBF4',
    fontWeight: '500',
    marginBottom: 20,
  },
  xContainer: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
  xText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFBF4',
  },
  dropdownStyle: {
    color: 'red',
  },
  rowTextStyle: {
    width: 300,
  },
  buttonStyle: {
    marginBottom: 10,
    width: '90%',
  },
  buttonTextStyle: {
    fontSize: 14,
  },
});
