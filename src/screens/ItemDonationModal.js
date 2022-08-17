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
                            <Text style = {styles.text}>Accepted items for donation include:</Text>
                            <Text style = {styles.text}>- White/brown rice, oats, and nuts</Text>
                            <Text style = {styles.text}>- Canned food with at least 6 months until expiration date</Text>
                            <Text style = {styles.text}>- Pasta and noodles</Text>
                            <Text style = {styles.text}>- Cooking oils such as canola, coconut, vegetable, etc.</Text>
                            <Text style = {styles.text}>- Any form of condiments</Text>
                            <Text style = {styles.text}>- Juices and other healthy drinks</Text>
                            <Text style = {styles.text}>Non-Food Items:</Text>
                            <Text style = {styles.text}>- Detergent, shampoo and conditioner</Text>
                            <Text style = {styles.text}>- Face and moisturising cream</Text>
                            <Text style = {styles.text}>- Toilet paper and tissue</Text>
                            <Text style = {styles.text}>- Notebooks and general stationery</Text>
                            <Text style = {styles.text}>- Children and adult clothing (either new or secondhand, in good condition)</Text>
                            <TouchableHighlight onPress = {() => {
                                this.toggleModal(!this.state.modalVisible)}}>
                                    <Text style = {styles.text}>Close</Text>
                            </TouchableHighlight>
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
 })
