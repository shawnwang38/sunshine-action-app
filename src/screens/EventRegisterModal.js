import React, { Component } from 'react';
import { Modal, Text, Button, TouchableHighlight, TouchableOpacity, Image, View, StyleSheet, TextInput, Ionicons } from "react-native";


//this is a basic modal component which takes in text and title for a button (when clicked opens the modal) 

class EventRegisterModal extends Component {
    state = {
        modalVisible: false,
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View style = {StyleSheet.container}>
                <Modal animationType = {"slide"} transparent = {false}
                    visible = {this.state.modalVisible}
                    onRequestClose = {() => { console.log("Modal has been closed.") } }>
                        <View style = {styles.modal}>
                        <TextInput
                            style={styles.input}
                            
                            
                            placeholder="Enter the total number of volunteers you would like to sign up"
                            keyboardType="numeric"
                            />
                            <TouchableHighlight onPress = {() => {
                                this.toggleModal(!this.state.modalVisible)}}>
                                    <Text style = {styles.close}>Close</Text>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                    
                    
                    <TouchableOpacity activeOpacity={0.5}>
                        <View style = {{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'orange', padding: 5 }}>
                            <Ionicons name="person-add-outline" size={16} />
                            <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'white'}}>Register</Text>
                        </View>
                        </TouchableOpacity>
                    
            </View>
        )
    }
}
export default EventRegisterModal



const styles = StyleSheet.create ({
    container: {
       alignItems: 'center',
       backgroundColor: '#FFF7E3',
       padding: 100
    },
    modal: {
       flex: 1,
       alignItems: 'center',
       backgroundColor: '#FFF7E3',
       padding: 50
    },
    text: {
       color: '#3f2949',
       marginTop: 10
    },
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
      close: {
        backgroundColor: "coral",
        borderRadius: 10,
        padding: 5,
        marginTop: 10,
        color: "white",
    },
    
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          marginLeft: 70,
          marginRight: 70,
        },
        button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: 'coral',
        },
        fixToText: {
          marginHorizontal: 50,
        }
})
