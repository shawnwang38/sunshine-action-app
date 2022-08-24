import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function EventDetailsCard(props) {
    return (
            <View style = {{ ...props.style, shadowColor: 'black', shadowOffset: { width: 2, height: 4 }, shadowRadius: 5, shadowOpacity: 0.3, marginBottom: 20 }}>
                <Image style = {{ width: 'auto', height: props.height }} source = {props.img} />
                <View style = {{ backgroundColor: 'white', padding: 15, paddingRight: 50 }}>
                    <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'black', fontSize: 16, marginBottom: 6 }}>{props.title}</Text>
                    {props.desc ? <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'gray', fontSize: 14, marginBottom: 10 }}>{props.desc}</Text> : null}
                    <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                        <Ionicons name="ios-calendar-outline" size={16} />
                        <Text style = {{ fontFamily: 'OpenSans_400Regular', marginLeft: 6 }}>{props.time}</Text>
                        <View style = {{ flexDirection: 'row', backgroundColor: 'transparent', paddingHorizontal: 50 }}></View>
                        <TouchableOpacity activeOpacity={0.5}>
                        <View style = {{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'orange', padding: 5 }}>
                            <Ionicons name="person-add-outline" size={16} />
                            <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'white'}}>Register</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    );
}