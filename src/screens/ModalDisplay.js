import React, { Component } from 'react';
import { Modal, Text, Button, TouchableHighlight, Image, View, StyleSheet} from "react-native";


//this is a basic modal component which takes in text and img (image is the button that when clicked opens the modal) 
class ModalDisplay extends Component {
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
                        <Text style = {{fontFamily: 'OpenSans_700Bold', fontSize: 16, marginVertical: 10, alignContent: 'center' }}>DONATE</Text>
                            <Text style = {styles.text}>{this.props.text}</Text>
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
                        <Image source={this.props.img} style={{height: 210, width: 150}} />
                        
                    </TouchableHighlight>
                    
            </View>
        )
    }
}
export default ModalDisplay



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
