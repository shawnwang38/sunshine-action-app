import React, { Component } from 'react'
import { Text, Image, View, ScrollView, Alert, Modal, StyleSheet, Pressable } from "react-native";
import Card from '../Card';
import Header from '../Header';

/* modal was commented out since it's still under construction */

/*const [modalVisible, setModalVisible] = useState(false);*/

export default function Discover() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20, alignItems: 'center', }}>
            <Text>Events | Calendar</Text>
            <Image style={ {paddingVertical: 25, width: 310, height: 242}} source={require('./../../assets/calendar.png')} />
            </View>
            <View style = {{ paddingHorizontal: 20 }}>
            <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 24, alignSelf: 'flex-start', marginBottom: 8 }}>Upcoming Events</Text>
            <Card img={require('./../../assets/banner.jpeg')} title="Event Name" desc="Event Description" height={0} time="Mon, Jan 1, 00:00 - 24:00" />
            <Card img={require('./../../assets/banner.jpeg')} title="Event Name" desc="Event Description" height={0} time="Mon, Jan 1, 00:00 - 24:00" />
            </View>
        </ScrollView>
        
    );
}

/*
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
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
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
*/

