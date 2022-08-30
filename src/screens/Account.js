import React, { Component } from 'react'
import { Text, Image, Button, View, ScrollView, Alert, Modal, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from 'react-navigation';
import { getDoc, doc } from 'firebase/firestore';

export default function Account(props) {
  const [name, setName] = React.useState([]);
  const [since, setSince] = React.useState("")
  React.useEffect(() => {
    if (props.auth.currentUser) {
      getDoc(doc(props.firestore, "accounts", props.auth.currentUser.uid)).then(ad => {
        if (!name.length) {
          setName([ad.data().first, ad.data().last]);
        }
        if (!since && ad.data().since) {
          const sinceDate = new Date(ad.data().since);
          setSince((sinceDate.getMonth() + 1) + "/" + sinceDate.getDate() + "/" + (sinceDate.getFullYear().toString().substring(2)));
        }
      });
    }
  });
  return (
    <View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
          <View style={{ alignSelf: "left" }}>
            <Image source={require("./../../assets/logo.png")} style={styles.profileImage} resizeMode="cover"></Image>
          </View>
            <View>
              <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'black', fontSize: 20, marginBottom: 6 }}>{name.join(" ")}</Text>
              <View style = {{ flexDirection: 'row', alignItems: 'left', marginBottom: 6 }}>
                <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'grey', fontSize: 15, marginBottom: 6, paddingRight: 40 }}>Member since {since}</Text>
              </View>
              <View style = {{ flexDirection: 'row', backgroundColor: 'transparent' }}>
                
                <TouchableOpacity activeOpacity={0.5} onPress={() => {props.navigation.navigate("Account Settings")}} >
                
                  <View style = {{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'orange', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 5 }}>
                    <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'white', fontSize: 15 }}>Account Settings</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        </View>
        {/*<View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
          <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'black', fontSize: 30, paddingLeft: 80 }}>XX</Text>
          <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'black', fontSize: 30, paddingLeft: 160 }}>XX</Text>
        </View>
        <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
          <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'grey', fontSize: 15, paddingLeft: 20 }}>Total Hours Volunteered</Text>
          <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'grey', fontSize: 15, paddingLeft: 40 }}>Events volunteered for</Text>
        </View>*/}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
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
      marginVertical: 25,
      marginHorizontal: 25,
      width: 150,
      height: 150,
      borderRadius: 100,
      overflow: "hidden"
  },
  });

