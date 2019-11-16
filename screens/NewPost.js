import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function NewPost() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.newPost}>New Post Page</Text>
    </ScrollView>
  );
}

NewPost.navigationOptions = {
  title: '',
  headerStyle: { backgroundColor: '#4CAF50' },
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
