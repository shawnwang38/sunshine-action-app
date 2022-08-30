import React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
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
    return (
        <View style={styles.header}>
            <Image source={require('./../assets/logo.png')} style={{ height: SIZE, width: SIZE }} />
            <View style = {{flexGrow: 1}}>
                <Text style = {{fontFamily: 'OpenSans_700Bold', textAlign: 'center', fontSize: 16 }}>
                    {props.text.toUpperCase()}
                </Text>
            </View>
            <TouchableOpacity >
                <Image source={require('./../assets/ambassadorsymbol.png')} style={{ height: 23, width: 20, marginLeft: 20 }} onPress={AmbassadorsScreen}/>
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