import React, { Component } from 'react'
import { Text, Switch, Image, Button, View, ScrollView, Alert, Modal, StyleSheet, Pressable, TouchableOpacity } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountModal from './AccountModal';
import { signOut } from 'firebase/auth';

export default function AccountSettings({ updateUserInfo, auth, navigation, route }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20, alignItems: 'center', paddingVertical: 0 }}>
                <AccountModal navigation={navigation} updateUserInfo={updateUserInfo} title="Edit First Name" field="First Name" text="Enter new first name:" auth = {auth} />
                <View style={styles.space} />
                <AccountModal navigation={navigation} updateUserInfo={updateUserInfo} title="Edit Last Name" field="Last Name" text="Enter new last name:" auth = {auth} />
                <View style={styles.space} />
                <AccountModal navigation={navigation} updateUserInfo={updateUserInfo} title="Edit Email Address" field="Email" text="Enter new email address:" auth = {auth} />
                <View style={styles.space} />
                <AccountModal navigation={navigation} updateUserInfo={updateUserInfo} title="Edit Password" field="Password" text="Enter new password:" auth = {auth} />
                <View style={styles.space} />
                <TouchableOpacity activeOpacity = {0.5} onPress = {() => {signOut(auth)}}>
                    <View style = {{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginTop: 25 }}>
                        <Text style = {{color: "white"}}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
        
    );
}


const styles = StyleSheet.create({
    button: {
      marginBottom: 20,
      padding: 30,
      backgroundColor: '#FF7F50',
    },
    space: {
        height: 20,
        width: 100,
    }
  });

