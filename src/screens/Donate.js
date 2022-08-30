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
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
            <ModalDisplay text="To make a donation via cheque, please provide a crossed cheque with payee 'SUNSHINE ACTION Ltd.' Please attach the donor’s name, contact telephone and complete address for tax-deductible receipt.

Sunshine Action has the following mailing address: Room D, 13/F Wing Kin Industrial Building, 4-6 Wing Kin Road, Kwai Chung." img={require('./../../assets/chequebutton.png')} />
            <ModalDisplay text="To make a donation via Stripe, visit https://buy.stripe.com/4gw9B42SBeNQayc9AA." img={require('./../../assets/stripebutton.png')} />
            </ScrollView>
            </View>
        </ScrollView>
        
    );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 300,
  }
});