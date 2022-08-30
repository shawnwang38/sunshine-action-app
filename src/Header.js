import React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ambassadors from './screens/Ambassadors';
import { signOut } from 'firebase/auth';

const SIZE = 40;

function AmbassadorsScreen() {
    return (
        <SafeAreaView style ={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
      <Header text="Find an Ambassador" />
      <Ambassadors />
    </SafeAreaView>
    )
}


export default function Header(props) {
    function BackButton() {
        return (
            <TouchableOpacity activeOpacity = {0.5} onPress = {() => { props.navigation.goBack() }}>
                <View style = {{width: SIZE}}><Ionicons name = "arrow-back-outline" size = {SIZE/1.5} /></View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.header}>
            {props.back ? <BackButton /> : <Image source={require('./../assets/logo.png')} style={{ height: SIZE, width: SIZE }} />}
            <View style = {{flexGrow: 1}}>
                <Text style = {{fontFamily: 'OpenSans_700Bold', textAlign: 'center', fontSize: 16 }}>
                    {props.text.toUpperCase()}
                </Text>
            </View>
            <View style = {{width: SIZE}} />
            
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