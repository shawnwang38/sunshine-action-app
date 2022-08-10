import React, { Component } from 'react'
import { Button, Text, View, ScrollView, Alert, Modal, StyleSheet, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Calendar() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20 }}>
                <Button title="EVENTS"/>
                <Button title="CALENDAR"/>
            </View>
        </ScrollView>
   
    );
}

