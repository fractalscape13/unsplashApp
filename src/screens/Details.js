import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { downloadPhoto } from '../api/apiCalls';
import * as MediaLibrary from 'expo-media-library';

export default function Details({route}) {
  const {imageDetails} = route.params;

  const downloadImage = async () => {
    let res = await downloadPhoto(imageDetails.links.download_location);
    await MediaLibrary.saveToLibraryAsync(res.url);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageContainer} source={{uri: imageDetails.urls.regular}}/>
      <TouchableOpacity 
        style={[styles.itemContainer, {paddingHorizontal: 20, left: null, right: 8}]}
        onPress={() => downloadImage()}  
      >
        <Feather name="download" size={28} color="#FFFBF4" />
      </TouchableOpacity>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>Photo by: {imageDetails.user.name}</Text>
      </View>
      <View style={[styles.itemContainer, {top: 55}]}>
        <Text style={styles.text}>Likes: {imageDetails.likes}</Text>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#131A27',
  },
  text: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '500',
    color: '#FFFBF4',
  },
  itemContainer: {   
    position: 'absolute',  
    backgroundColor: '#131A27',
    borderWidth: 1,
    borderColor: '#FFFBF4',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
    top: 8,
    left: 5,
  },
  imageContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1,
  },  
});
