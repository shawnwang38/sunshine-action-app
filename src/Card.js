import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Card(props, {navigation}) {
    return (
        <View style = {{ ...props.style, maxWidth: props.big ? 400 : 250, shadowColor: 'black', shadowOffset: { width: 2, height: 4 }, shadowRadius: 5, shadowOpacity: 0.3, marginBottom: 20 }}>
            {props.img ? <Image style = {{ width: 'auto', height: props.height }} source = {props.img} /> : null}
            <View style = {{ backgroundColor: 'white', padding: 15 }}>
                <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'black', fontSize: 16, marginBottom: 6 }}>{props.big ? props.title : (props.title.length > 60 ? props.title.substring(0, 60) + "..." : props.title)} {props.registered ? <Ionicons name="checkmark-outline" size = {20} color = "orange" /> : null}</Text>
                {props.desc ? <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'gray', fontSize: 14, marginBottom: 10 }}>{props.desc}</Text> : null}
                <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                    <Ionicons name="ios-calendar-outline" size={16} />
                    <Text style = {{ fontFamily: 'OpenSans_400Regular', marginLeft: 6 }}>{props.time}</Text>
                </View>
                {props.location ? <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                    <Ionicons name="ios-location-outline" size={16} />
                    <Text style = {{ fontFamily: 'OpenSans_400Regular', marginLeft: 6 }}>{props.location}</Text>
                </View> : null}
            </View>
        </View>
    );
}

