import React, { useState, useRef } from "react";
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { getPhotos } from '../api/apiCalls';

export default function List({navigation}) {
  const [imageData, setImageData] = useState([]);
  const [pageNumber, setPageNumber] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState('');
  const flatListRef = useRef();

  const submitSearch = async () => {
    let res = await getPhotos(searchTerm, 1);
    setImageData(res.results);
    flatListRef.current.scrollToOffset({offset: 0});
    setSubmittedSearchTerm(searchTerm);
    setPageNumber(2);
  };

  const nextPage = async () => {
    let res = await getPhotos(submittedSearchTerm, pageNumber);
    res.results.map(item => imageData.push(item));
    setPageNumber(pageNumber + 1);
  };

  const renderImage = (image) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', {imageDetails: image.item})} >
        <Image style={styles.imageContainer} source={{uri: image.item.urls.small}}/>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TextInput 
          placeholder="Enter search term"
          placeholderTextColor={'#AEC5FA'}
          style={styles.textInput}
          onChangeText={text => setSearchTerm(text)}
        />
        <TouchableOpacity style={styles.button} onPress={() => submitSearch()}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
      {imageData.length ? (
        <FlatList 
          ref={flatListRef}
          data={imageData}
          renderItem={renderImage}
          style={styles.listContainer}
          contentContainerStyle={styles.listContentContainer}
          onEndReached={() => nextPage()}
        />
      ) : (
        <Text style={styles.bodyText}>Search for images and see them here!</Text>
      )}
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#131A27',
    paddingTop: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    height: 35,
    marginBottom: 5,
  },
  textInput: {
    backgroundColor: '#3C4E77',
    color: '#fff',
    fontWeight: '600',
    width: '60%',
    height: 35,
    borderWidth: 1,
    borderColor: '#FFFBF4',
    borderRadius: 8,
    paddingHorizontal: 5,
  },
  text: {
    color: '#AEC5FA',
    fontWeight: '500',
  },
  button: {
    borderWidth: 2,
    borderColor: '#AEC5FA',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginLeft: 10,
  },
  bodyText: {
    textAlign: 'center',
    marginTop: 80,
    marginHorizontal: 60,
    color: '#AEC5FA',
    fontWeight: '500',
    fontSize: 25,
    lineHeight: 35,
  },
  listContainer: {
    width: '100%',
  },
  listContentContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 1.5,
    borderColor: '#AEC5FA',
    borderRadius: 12,
    height: 150,
    width: 250,
    marginVertical: 15,
  },  
});
