import React, { Component } from 'react'
import { Text, Image, Button, View, ScrollView, Alert, Modal, StyleSheet, Pressable } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*
Button navigation to account settings, temporarily removed
<Button title="Account Settings" onPress={() => navigation.navigate('Account Settings')} />
*/
export default function AccountSettings() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20, alignItems: 'center', paddingVertical: 20 }}>
                <Button color="coral" title="Change Username" />
                <View style={styles.space} />
                <Button title="Change Password" color="coral" />
                <View style={styles.space} />
                <Button title="Change Details" color="coral" />
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

