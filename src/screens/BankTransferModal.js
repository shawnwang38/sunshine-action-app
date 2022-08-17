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
                            <Text style = {styles.text}>Use the following details to make a bank wire transfer:</Text>
                            <Text style = {styles.text}>HSBC:</Text>
                            <Text style = {styles.text}>Account No.: 400-595989-838</Text>
                            <Text style = {styles.text}>Swift: HSBCHKHHHKH</Text>
                            <Text style = {styles.text}>Bank I.D.: 400</Text>
                            <Text style = {styles.text}>Beneficiary I.D.: 595989-838</Text>
                            <Text style = {styles.text}>Bank Address: 1 Queen's Road, Central Hong Kong</Text>
                            <Text style = {styles.text}>Bank Tel: 2748 8288</Text>
                            <Text style = {styles.text}>Bank of China:</Text>
                            <Text style = {styles.text}>Account No.: 012 926 1 018415 6</Text>
                            <Text style = {styles.text}>Swift: BKCHHKHHXXX</Text>
                            <Text style = {styles.text}>Bank I.D.: 012</Text>
                            <Text style = {styles.text}>Branch I.D.: 926</Text>
                            <Text style = {styles.text}>Beneficiary I.D.: 10184156</Text>
                            <Text style = {styles.text}>Bank Address: Head Office 1 Garden Road, Hong Kong</Text>
                            <Text style = {styles.text}>Bank Tel: (852)-2826-6888</Text>

                            <TouchableHighlight onPress = {() => {
                                this.toggleModal(!this.state.modalVisible)}}>
                                    <Text style = {styles.text}>Close</Text>
                            </TouchableHighlight>
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
 })
