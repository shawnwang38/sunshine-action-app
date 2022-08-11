import React, { Component } from 'react'
import { Text, Image, Button, View, ScrollView, Alert, Modal, StyleSheet, Pressable } from "react-native";
import Card from '../Card';
import Header from '../Header';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';

export default function Events() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20, paddingVertical: 20, justifyContent: 'center', flexDirection: "row", fontFamily: 'OpenSans_700Bold', fontSize: 10, backgroundColor: 'transparent',}}>
                <Text>:)</Text>
            </View>
        </ScrollView>
        
    );
}


const styles = StyleSheet.create({
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
  });

