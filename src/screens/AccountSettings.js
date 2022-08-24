import React, { Component } from 'react'
import { Text, Image, Button, View, ScrollView, Alert, Modal, StyleSheet, Pressable } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountModal from './AccountModal';

/*
Button navigation to account settings, temporarily removed
<Button title="Account Settings" onPress={() => navigation.navigate('Account Settings')} />
*/
export default function AccountSettings({ navigation, route }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20, alignItems: 'center', paddingVertical: 20 }}>
                <AccountModal title="Edit Username" field="Username" />
                <View style={styles.space} />
                <AccountModal title="Edit Password" field="Password" />
                <View style={styles.space} />
                <AccountModal title="Edit Location" field="City, State/Province, Country" />
                <View style={styles.space} />
                <AccountModal title="Edit Email Address" field="email@email.com" />
                <View style={styles.space} />
                <AccountModal title="Notification Preferences" />
                
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
