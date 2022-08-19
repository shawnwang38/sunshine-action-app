import React, { Component } from 'react'
import { Text, Image, Button, View, ScrollView, Alert, Modal, StyleSheet, Pressable } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*
I (rachel) have been messing with the navigation, commented it out for now

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ title: 'Account' }}
        />
        <Stack.Screen name="Account Settings" component={AccountSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const AccountScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Account Settings')
        }
      />
    );
  };
  const AccountSettingsScreen = ({ navigation, route }) => {
    return <Text>pepep</Text>;
  };

  export default MyStack;

*/
export default function Account() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20, alignItems: 'center', paddingVertical: 20 }}>
            <Button title="Account Settings" color="coral" onPress={() => navigation.navigate('Account Settings')} />
            </View>
        </ScrollView>
        
    );
}


const styles = StyleSheet.create({
    button: {
      marginBottom: 20,
      padding: 30,
      backgroundColor: '#FF7F50',
    },
    space: {
        height: 20,
        width: 100,
    }
  });

