import React, { Component } from 'react'
import { Text, View, Button, TouchableHighlight, ScrollView, StyleSheet } from "react-native";
import DonateCard from '../Card';

import ContactCard from '../ContactCard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function Ambassadors() {
    return (
      <View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
        
            <View style = {{ paddingHorizontal: 10, backgroundColor: "#FFF7E3" }}>
            <MapView 
            style={{height: 250, width: '100%', marginBottm: 0}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            />
            <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 24, alignSelf: 'flex-start', paddingBottom: 2, marginTop: 8 }}>
                    {"Your Location"}
                </Text>
            
            
            
            </View>
            </ScrollView>
            </View>
        
        
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