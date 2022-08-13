import React, { Component } from 'react'
import { Text, Image, Button, View, ScrollView, Alert, Modal, StyleSheet, Pressable } from "react-native";
import Card from '../Card';
import Header from '../Header';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import { SearchBar } from 'react-native-elements';

export default function Events() {

        return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            
            <View style = {{ width:350, paddingVertical: 20, justifyContent: 'center',  fontFamily: 'OpenSans_700Bold', fontSize: 10, backgroundColor: 'transparent',}}>
                <Card img={require('./../../assets/banner.jpeg')} title="Event Name" desc="Event Description" height={200} time="Mon, Jan 1, 00:00 - 24:00" />
                <Card img={require('./../../assets/banner.jpeg')} title="Event Name" desc="Event Description" height={200} time="Mon, Jan 1, 00:00 - 24:00" />
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

