import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ContactCard(props) {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style = {{ ...props.style, shadowColor: 'black', shadowOffset: { width: 2, height: 4 }, shadowRadius: 5, shadowOpacity: 0.3, marginBottom: 5, width: "auto" }}>
                
                <View style = {{ backgroundColor: 'white', padding: 15, width: 400, marginVertical: 5 }}>
                    <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'black', fontSize: 16, marginBottom: 6 }}>{props.title}</Text>
                    {props.desc ? <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'gray', fontSize: 14, marginBottom: 10 }}>{props.desc}</Text> : null}
                    <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                        
                        <Text style = {{ fontFamily: 'OpenSans_400Regular', marginLeft: 6 }}>{props.location}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}