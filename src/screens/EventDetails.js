import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from "react-native";
import EventDetailsCard from '../EventDetailsCard';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventRegisterModal from './EventRegisterModal';


export default function EventDetails() {
    return(
        <View>
        <EventDetailsCard img={require('./../../assets/banner.jpeg')} title="Event Name" desc="Event Description" height={200} time="Mon, Jan 1, 00:00 - 24:00" />
        <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
            <Ionicons name='location-outline' size={16} />
            <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'black', fontSize: 14}}>Location</Text>
        </View>
        <MapView 
            style={{height: '50%', width: '100%'}}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
});