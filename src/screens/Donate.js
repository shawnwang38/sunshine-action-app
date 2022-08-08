import React, { Component } from 'react'
import { Text, View, ScrollView } from "react-native";
import DonateCard from '../Card';

export default function Donate() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20 }}>
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
                <DonateCard img={require('./../../assets/giveasialogo.png')} title="Give.Asia" height={150} style = {{ width: 150, marginRight: 20 }} />
                <DonateCard img={require('./../../assets/banktransfer.png')} title="Bank Transfer" height={150} style = {{ width: 150, marginRight: 20 }} />
            </ScrollView>
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
                <DonateCard img={require('./../../assets/ggf.png')} title="GoGetFunding" height={150} style = {{ width: 150, marginRight: 20 }} />
                <DonateCard img={require('./../../assets/itemdonation.png')} title="Item Donation" height={150} style = {{ width: 150, marginRight: 20 }} />
            </ScrollView>
            </View>
        </ScrollView>
    );
}