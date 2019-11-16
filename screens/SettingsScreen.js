import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.profile}>
       This is the Setting and Profile Page
      </Text>
   </View>
  );
}

SettingsScreen.navigationOptions = {
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
    fontFamily: 'Yolluq'
  },
  profile: {
    fontSize: 40,
  }
})