import React, { Component } from 'react'
import { TouchableWithoutFeedback, Text, View, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, TextInput, TouchableHighlight, Keyboard, Touchable } from "react-native";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EventRegisterModal from './EventRegisterModal';
import openMap from "react-native-open-maps";

export default function EventDetails(props) {
    const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const start = new Date(props.event.start), end = new Date(props.event.end);
    let startDate = DAYS[start.getDay()], endDate = "";
    startDate += ", " + MONTHS[start.getMonth()] + " " + start.getDate() + ", ";
    if (start.getDate() != end.getDate() || start.getMonth() != end.getMonth() || start.getFullYear() != end.getFullYear()) {
        endDate += DAYS[end.getDay()];
        endDate += ", " + MONTHS[end.getMonth()] + " " + end.getMonth() + ", ";
    }
    startDate += start.getHours() < 10 ? "0" + start.getHours() : start.getHours();
    endDate += end.getHours() < 10 ? "0" + end.getHours() : end.getHours();
    startDate += ":" + (start.getMinutes() < 10 ? "0" + start.getMinutes() : start.getMinutes());
    endDate += ":" + (end.getMinutes() < 10 ? "0" + end.getMinutes() : end.getMinutes());
    const [modal, setModal] = React.useState(false);
    const [extra, setExtra] = React.useState("0");
    const [unregister, setUnregister] = React.useState(false);
    return (
        <>
            <Modal animationType = {"slide"} transparent = {false}
                    visible = {modal}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style = {styles.modal}>
                        <Text style = {{fontFamily: 'OpenSans_700Bold', fontSize: 16, marginVertical: 10 }}>EVENT REGISTRATION</Text>
                        <Text style = {{fontSize: 16, marginVertical: 10, textAlign: "center"}}>{props.event.name}</Text>
                        <Text style = {{fontSize: 16, marginVertical: 10, textAlign: "center"}}>{startDate + " - " + endDate}</Text>
                        <Text style = {{fontSize: 16, marginVertical: 10, textAlign: "center"}}>{props.event.location}</Text>
                        <View style = {{height: 0, width: '100%', margin: 10, borderColor: 'black', borderWidth: 0.5}} />
                        <Text style = {{fontSize: 16, marginVertical: 10}}>Registering as: <Text style = {{fontWeight: 'bold'}}>{props.user.join(" ")}</Text></Text>
                        <Text style = {{fontFamily: 'OpenSans_400Regular', color: 'gray', fontSize: 14, textAlign: "center", marginBottom: 15}}>If this is not correct, you can update your name from the Account Settings screen.</Text>
                        <View style = {{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                            <Text style = {{fontSize: 16, marginRight: 10}}>Extra spots to reserve:</Text>
                            <TextInput style = {{borderColor: 'gray', borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10, fontSize: 16, borderRadius: 4, width: 50, textAlign: "center"}}
                                keyboardType="numeric"
                                value = {extra} onChange={setExtra}
                                />
                        </View>
                        <TouchableOpacity disabled = {unregister} activeOpacity={0.5} style = {{marginTop: 30, marginBottom: 10}} onPress={() => setModal(true)}>
                            <View style = {{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
                                <Ionicons name="person-add-outline" size={20} color='white' />
                                <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'white', marginLeft: 10, marginRight: 4, fontSize: 16, position: 'relative', top: -1 }}>Register</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => setModal(false)}>
                            <Text style = {styles.close}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <View style = {{ justifyContent: "stretch" }}>
                <Image style = {{ maxWidth: "100%", height: 250, resizeMode: "cover" }} source = {props.img} />
                <View style = {{ padding: 15, paddingRight: 15 }}>
                    <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                        <Ionicons name="ios-calendar-outline" size={16} />
                        <Text style = {{ fontFamily: 'OpenSans_400Regular', marginLeft: 6, flexGrow: 1 }}>{startDate + " - " + endDate}</Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => setModal(true)}>
                            <View style = {{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
                                <Ionicons name={props.event.registered ? "checkmark-outline" : "person-add-outline"} size={20} color='white' />
                                <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'white', marginLeft: 10, marginRight: 4, fontSize: 16, position: 'relative', top: -1 }}>{props.event.registered ? "Registered" : "Register"}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style = {{ fontFamily: 'OpenSans_600SemiBold', color: 'black', fontSize: 20, marginBottom: 6 }}>{props.event.name}</Text>
                    {props.event.description ? <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'gray', fontSize: 14, marginVertical: 10 }}>{props.event.description}</Text> : null}
                    <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6, marginTop: 12 }}>
                        <Ionicons name='location-outline' size={16} />
                        <TouchableOpacity activeOpacity={0.5} onPress={() => openMap({ query: props.event.location })}>
                            <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'black', fontSize: 14, marginLeft: 6, textDecorationLine: "underline" }}>{props.event.location}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*<MapView 
                    style={{height: '50%', width: '100%'}}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                />*/}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF7E3',
        padding: 50,
     },
     close: {
        marginTop: 10,
        textDecorationLine: 'underline'
     }
});