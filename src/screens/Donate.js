import React, { Component } from 'react'
import { Text, View, ScrollView, Alert, Modal, StyleSheet, Pressable } from "react-native";
import DonateCard from '../Card';

/* modal was commented out since it's still under construction */

/*const [modalVisible, setModalVisible] = useState(false);*/

export default function Donate() {
    return (
        /*<View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Visit https://give.asia/charity/sunshine-action to make an online donation through Give.Asia.</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>*/
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20 }}>
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
                    <DonateCard img={require('./../../assets/giveasialogo.png')} title="Give.Asia" height={150} style = {{ width: 150, marginRight: 20 }} />
                    <DonateCard img={require('./../../assets/banktransfer.png')} title="Bank Transfer" height={150} style = {{ width: 150, marginRight: 20 }} />
            </ScrollView>
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
                <DonateCard img={require('./../../assets/ggf.png')} title="GoGetFunding" height={150} style = {{ width: 150, marginRight: 20 }} />
                <DonateCard img={require('./../../assets/itemdonation.png')} title="Item Donation" height={150} style = {{ width: 150, marginRight: 20 }} />
            </ScrollView>
            
            </View>
        </ScrollView>
        
    );
}

/*
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
*/

