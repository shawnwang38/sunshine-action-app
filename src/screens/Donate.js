import React, { Component } from 'react'
import { Text, View, Button, TouchableHighlight, ScrollView, StyleSheet } from "react-native";
import DonateCard from '../Card';
import ModalDisplay from './ModalDisplay';

import BankTransferModal from './BankTransferModal';
import ItemDonationModal from './ItemDonationModal';

//the reason why the modal template is not used for bank transfer and item donation is because those modals require line breaks, which get messed up when ModalDisplay is used.

export default function Donate() {
    return (
      
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20 }}>
            
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
              <ModalDisplay text="To make a donation via Give.Asia, visit https://give.asia/charity/sunshine-action." img={require('./../../assets/giveasiabutton.png')} />
              <BankTransferModal />
            </ScrollView>
            
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
            <ModalDisplay text="To make a donation via GoGetFunding, visit gogetfunding.com." img={require('./../../assets/gogetfundingbutton.png')} />
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