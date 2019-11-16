
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

// Add Carosel Componet here for the Image Compnent (extinct animals carosle )


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Where the Carosel Goes here</Text>
      {/* Image Carosale Component
        Post List Component Here
      */}

    </View>
  );
}


HomeScreen.navigationOptions = {
  title: 'Eco - Traveller',
  headerStyle: { backgroundColor: '#4CAF50' },
  headerTitleStyle: {
    fontSize:25,
    fontFamily: 'Yolluq'
  }
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 60,
  },
});
