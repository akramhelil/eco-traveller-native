import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function NewPost() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.newPost}>New Post Page</Text>
      {/* Renders a form here, User can post Pics and save it to the data base
      How to intergrate Cloudinary in here  with React Native
      https://cloudinary.com/visualweb/display/IMMC/React+Native+Image+Upload */}
    </ScrollView>
  );
}

NewPost.navigationOptions = {
  title: 'Eco - Traveller',
  headerStyle: { backgroundColor: '#4CAF50' },
  headerTitleStyle: {
    fontSize: 25,
    fontFamily: 'Yolluq'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  newPost: {
    fontSize: 40,
  }
});
