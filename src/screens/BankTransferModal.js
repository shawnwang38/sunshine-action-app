import React, { Component } from 'react';
import { Modal, Text, Button, TouchableHighlight, Image, View, StyleSheet} from "react-native";
import DonateCard from '../Card';

class BankTransferModal extends Component {
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
                            <Text style = {{fontFamily: 'OpenSans_700Bold', fontSize: 16, marginVertical: 10, alignContent: 'center' }}>DONATE - BANK TRANSFER</Text>
                            <Text style = {styles.text}>Use the following details to make a bank wire transfer:</Text>
                            <Text style = {{fontFamily: 'OpenSans_700Bold', fontSize: 14, marginVertical: 10, alignContent: 'center' }}>HSBC:</Text>
                            <Text style = {{paddingRight: 77}}>Account No.: 400-595989-838</Text>
                            <Text style = {{paddingRight: 132, marginTop: 5}}>Swift: HSBCHKHHHKH</Text>
                            <Text style = {{paddingRight: 185, marginTop: 5}}>Bank I.D.: 400</Text>
                            <Text style = {{paddingRight: 92, marginTop: 5 }}>Beneficiary I.D.: 595989-838</Text>
                            <Text style = {{paddingLeft: 5, marginTop: 5 }}>Bank Address: 1 Queen's Road, Central Hong Kong</Text>
                            <Text style = {{paddingRight: 145, marginTop: 5 }}>Bank Tel: 2748 8288</Text>
                            <Text style = {{fontFamily: 'OpenSans_700Bold', fontSize: 14, marginVertical: 10, alignContent: 'center' }}>Bank of China:</Text>
                            <Text style = {{paddingRight: 75}}>Account No.: 012 926 1 018415 6</Text>
                            <Text style = {{paddingRight: 138, marginTop: 5}}>Swift: BKCHHKHHXXX</Text>
                            <Text style = {{paddingRight: 192, marginTop: 5}}>Bank I.D.: 012</Text>
                            <Text style = {{paddingRight: 177, marginTop: 5}}>Branch I.D.: 926</Text>
                            <Text style = {{paddingRight: 118, marginTop: 5 }}>Beneficiary I.D.: 10184156</Text>
                            <Text style = {{paddingRight: 13, marginTop: 5 }}>Bank Address: Head Office 1 Garden Road, Hong Kong</Text>
                            <Text style = {{paddingRight: 106, marginTop: 5 }}>Bank Tel: (852)-2826-6888</Text>
                            <View style = {{ paddingTop: 30, backgroundColor: 'transparent'}}>
                            <TouchableHighlight onPress = {() => {this.toggleModal(!this.state.modalVisible)}}>
                                <View style = {{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
                                    <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'white', marginLeft: 10, marginRight: 4, fontSize: 16, position: 'relative', top: -1, paddingRight: 5 }}>Close</Text>
                                </View>
                            </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                    
                    <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
                        <Image source={require('./../../assets/banktransferbutton.png')} style={{height: 210, width: 150}} />
                    </TouchableHighlight>
                    
            </View>
        )
    }
}
export default BankTransferModal



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
    }
 })
