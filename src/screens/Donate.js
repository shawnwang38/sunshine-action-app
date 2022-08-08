import React, { Component } from 'react'
import { Text, View, ScrollView } from "react-native";
import Card from '../Card';

export default function Donate() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20 }}>
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
                <Card img={require('./../../assets/banner.jpeg')} title="Give.Asia" height={125} time="Mon, Jan 1" style = {{ width: 150, marginRight: 20 }} />
                <Card img={require('./../../assets/banner.jpeg')} title="Bank Transfer" height={125} time="Mon, Jan 1" style = {{ width: 150, marginRight: 20 }} />
                <Card img={require('./../../assets/banner.jpeg')} title="GoGetFunding" height={125} time="Mon, Jan 1" style = {{ width: 150 }} />
            </ScrollView>
            </View>
        </ScrollView>
    );
}