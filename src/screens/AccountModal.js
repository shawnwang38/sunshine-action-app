import React, { Component } from 'react';
import { Modal, Text, Button, TouchableOpacity, Image, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
import { updateEmail, updatePassword, signOut } from "firebase/auth";

//this is a basic modal component which takes in text and title for a button (when clicked opens the modal) 

class AccountModal extends Component {
    state = {
        modalVisible: false,
        input: "",
        loading: false,
        error: ""
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible, error: "", loading: false, input: "" });
    }
    errMsg(m) {
      switch (m.code) {
        case "auth/email-already-in-use":
          return "This email is already taken";
        case "auth/invalid-email":
          return "Invalid email";
        case "auth/requires-recent-login":
          return "You need to relogin before performing this action."
        default:
          return m.message;
      }
    }
    processChange() {
      if (!/\S/.test(this.state.input)) {
        return;
      }
      this.setState({ loading: true, error: "" });
      if (this.props.field == "First Name") {
        this.props.updateUserInfo({ first: this.state.input }).then(() => {
          this.props.navigation.reset({ index: 0, routes: [{ name: "AccountStack" }] });
        }).catch((err) => {
          this.setState({ loading: false, error: this.errMsg(err) });
        });
      } else if (this.props.field == "Last Name") {
        this.props.updateUserInfo({ last: this.state.input }).then(() => {
          this.props.navigation.reset({ index: 0, routes: [{ name: "AccountStack" }] });
        }).catch((err) => { 
          this.setState({ loading: false, error: this.errMsg(err) });
        });
      } else if (this.props.field == "Email") {
        updateEmail(this.props.auth.currentUser, this.state.input).then(() => {
          this.toggleModal(false);
          signOut(this.props.auth);
        }).catch((err) => { 
          this.toggleModal(false);
          this.setState({ loading: false, error: this.errMsg(err) });
        });
      } else if (this.props.field == "Password") {
        updatePassword(this.props.auth.currentUser, this.state.input).then(() => {
          signOut(this.props.auth);
        }).catch((err) => { 
          this.setState({ loading: false, error: this.errMsg(err) });
        });
      }
    }
    render() {
        return (
            <View style = {StyleSheet.container}>
                <Modal animationType = {"slide"} transparent = {false}
                    visible = {this.state.modalVisible}
                    onRequestClose = {() => { console.log("Modal has been closed.") } }>
                        <View style = {styles.modal}>
                        <Text style = {styles.header}>{"CHANGE " + this.props.field.toUpperCase()}</Text>
                        <Text style = {{ fontFamily: "OpenSans_400Regular" }}>{this.props.text}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={this.props.field}
                            secureTextEntry={this.props.field == "Password" ? true : false}
                            keyboardType = {this.props.field == "Email" ? "email-address" : "default"}
                            value={this.state.input}
                            onChangeText={v => {this.setState({ ...this.state, input: v })}}
                            />
                            {this.state.error ? <Text style = {{color: "red", fontFamily: "OpenSans_400Regular", marginVertical: 10 }}>{this.state.error}</Text> : null}
                            <TouchableOpacity disabled = {this.state.loading} activeOpacity = {0.5} onPress = {() => {this.processChange()}}>
                              <View style = {{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.loading ? '#e0bc89' : 'orange', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginVertical: 25 }}>
                                  {this.state.loading ? <ActivityIndicator color = "white" /> : <Text style = {{color: "white"}}>Change</Text>}
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity = {0.5} onPress = {() => {
                                this.toggleModal(!this.state.modalVisible)}}>
                                  <Text style = {{textDecorationLine: "underline"}}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    
                    
                    <Button title={this.props.title} color="coral" onPress = {() => {this.toggleModal(true)}} />
                    
            </View>
        )
    }
}
export default AccountModal



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
       padding: 50,
       paddingTop: 60
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
    header: {
      fontFamily: "OpenSans_700Bold",
      fontSize: 16,
      marginBottom: 32
    },
        input: {
          height: 40,
          width: 300,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          marginLeft: 70,
          marginRight: 70,
          marginTop: 15
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
