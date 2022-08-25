import React, { Component } from 'react'
import { Text, Image, Button, View, ScrollView, Alert, Modal, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import AccountsBarNavigator from '../AccountsNavigator';
import { useNavigation } from 'react-navigation';
import accountStackNav from '../../App';
import AccountStack from '../../App';


export default function Account(props, { navigation, route }) {
  
  return(
    
    <View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
        <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
          <View style={{ alignSelf: "left" }}>
            <Image source={require("./../../assets/logo.png")} style={styles.profileImage} resizeMode="center"></Image>
          </View>
            <View>
              <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'black', fontSize: 20, marginBottom: 6 }}>User Name</Text>
              <View style = {{ flexDirection: 'row', alignItems: 'left', marginBottom: 6 }}>
                <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'grey', fontSize: 15, marginBottom: 6, paddingRight: 40 }}>Member Since DD/MM/YY</Text>
              </View>
              <View style = {{ flexDirection: 'row', backgroundColor: 'transparent' }}>
                
                <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate("Account.")}} >
                <Button title="pain" onPress={() => {navigation.navigate("AccountSettings")}} />
                  <View style = {{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'orange', padding: 10 }}>
                    <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'white', fontSize: 15 }}>Account Settings</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        </View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
          <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'black', fontSize: 30, paddingLeft: 80 }}>XX</Text>
          <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'black', fontSize: 30, paddingLeft: 160 }}>$XX</Text>
        </View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
          <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'grey', fontSize: 15, paddingLeft: 20 }}>Total Hours Volunteered</Text>
          <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'grey', fontSize: 15, paddingLeft: 82 }}>Total Donated</Text>
        </View>
      </ScrollView>
    </View>
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
    },
    profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden"
  },
  });

