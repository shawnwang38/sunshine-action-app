import React, { Component } from 'react'
import { Text, View, ScrollView } from "react-native";
import Card from '../Card';

export default function Home() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20 }}>
                <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 24, alignSelf: 'flex-start', marginBottom: 8 }}>
                    {"Welcome back, " + "User" + "!"}
                </Text>
                <View style={{ width: 40, height: 0, borderColor: 'black', borderWidth: 0.5, marginBottom: 20 }} />
                <Text style={{ fontFamily: 'OpenSans_600SemiBold', fontSize: 16, marginBottom: 15 }}>Your Next Event</Text>
                <Card img={require('./../../assets/banner.jpeg')} title="Event Name" desc="Event Description" height={200} time="Mon, Jan 1, 00:00 - 24:00" />
                <Text style={{ fontFamily: 'OpenSans_600SemiBold', fontSize: 16, marginBottom: 15 }}>Upcoming Events</Text>
            </View>
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
                <Card img={require('./../../assets/banner.jpeg')} title="Event Name" height={125} time="Mon, Jan 1" style = {{ width: 150, marginRight: 20 }} />
                <Card img={require('./../../assets/banner.jpeg')} title="Event Name" height={125} time="Mon, Jan 1" style = {{ width: 150, marginRight: 20 }} />
                <Card img={require('./../../assets/banner.jpeg')} title="Event Name" height={125} time="Mon, Jan 1" style = {{ width: 150 }} />
            </ScrollView>
        </ScrollView>
    );
}