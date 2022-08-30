import React, { Component } from 'react';
import { Modal, Text, Button, TouchableHighlight, Image, View, StyleSheet} from "react-native";
import DonateCard from '../Card';

class ItemDonationModal extends Component {
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
                        <Text style = {{fontFamily: 'OpenSans_700Bold', fontSize: 16, marginVertical: 10, alignContent: 'center' }}>DONATE - ITEMS</Text>
                        <Text style = {{fontFamily: 'OpenSans_700Bold', fontSize: 14, marginVertical: 10, alignContent: 'center' }}>Accepted items for donation include:</Text>
                            <Text style = {{paddingRight: 18, marginTop: 10}}>- White/brown rice, oats, and nuts</Text>
                            <Text style = {{paddingLeft: 35, marginTop: 5}}>- Canned food with at least 6 months until expiration date</Text>
                            <Text style = {{paddingRight: 100, marginTop: 5}}>- Pasta and noodles</Text>
                            <Text style = {{paddingLeft: 20, marginTop: 5}}>- Cooking oils such as canola, coconut, vegetable, etc.</Text>
                            <Text style = {{paddingRight: 70, marginTop: 5}}>- Any form of condiments</Text>
                            <Text style = {{paddingRight: 28, marginTop: 5}}>- Juices and other healthy drinks</Text>
                            <Text style = {{fontFamily: 'OpenSans_700Bold', fontSize: 14, marginVertical: 10, alignContent: 'center' }}>Non-Food Items:</Text>
                            <Text style = {{marginTop: 10}}>- Detergent, shampoo and conditioner</Text>
                            <Text style = {{paddingRight: 45, marginTop: 10}}>- Face and moisturising cream</Text>
                            <Text style = {{paddingRight: 79, marginTop: 10}}>- Toilet paper and tissue</Text>
                            <Text style = {{paddingRight: 13, marginTop: 10}}>- Notebooks and general stationery</Text>
                            <Text style = {{paddingLeft: 29, marginTop: 10}}>- Children and adult clothing (either new or secondhand, in good condition)</Text>
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
                    <Image source={require('./../../assets/itemdonationbutton.png')} style={{height: 210, width: 150}} />
                    </TouchableHighlight>
                    
            </View>
        )
    }
}
export default ItemDonationModal



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
