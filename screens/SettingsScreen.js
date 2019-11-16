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
  title: '',
  headerStyle: { backgroundColor: '#4CAF50' },
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  profile: {
    fontSize: 40,
  }
})