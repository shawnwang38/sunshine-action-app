import React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";

const SIZE = 40;

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Image source={require('./../assets/logo.png')} style={{ height: SIZE, width: SIZE }} />
            <View style = {{flexGrow: 1}}>
                <Text style = {{fontFamily: 'OpenSans_700Bold', textAlign: 'center', fontSize: 16 }}>
                    {props.text.toUpperCase()}
                
                
                </Text>
                
            </View>
            <View style = {{width: SIZE}} />
            <TouchableOpacity >
                <Image source={require('./../assets/ambassadorsymbol.png')} style={{ height: 20, width: 23 }} />
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: SIZE * 1.5,
        alignSelf: 'stretch',
        marginBottom: 10,
        paddingHorizontal: 15
    }
});