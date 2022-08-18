import React, { Component } from 'react'
import { Text, View, Button, TouchableHighlight, ScrollView, StyleSheet } from "react-native";
import DonateCard from '../Card';
import GiveAsiaModal from './GiveAsiaModal';
import GoGetFundingModal from './GoGetFundingModal';
import BankTransferModal from './BankTransferModal';
import ItemDonationModal from './ItemDonationModal';

export default function Ambassadors() {
    return (
      
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20 }}>
            
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
              <GiveAsiaModal />
              <BankTransferModal />
            </ScrollView>
            
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
                <GoGetFundingModal />
                <ItemDonationModal />
            </ScrollView>
            
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