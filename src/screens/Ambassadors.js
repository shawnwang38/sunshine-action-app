import React, { Component } from 'react'
import { Text, View, Button, TouchableHighlight, ScrollView, StyleSheet } from "react-native";
import DonateCard from '../Card';
import AmbassadorsTopBarNavigator from '../AmbassadorsTopNavigator';
import ContactCard from '../ContactCard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Ambassadors() {
    return (
      
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20 }}>
            <View style={{ height: 200, backgroundColor: "#FFF" }} />
            <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 24, alignSelf: 'flex-start', marginBottom: 8, marginTop: 8 }}>
                    {"Your Location"}
                </Text>
            <AmbassadorsTopBarNavigator />
            
            
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

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
  }
});