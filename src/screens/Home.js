import React, { Component, useEffect } from 'react'
import { Text, View, ScrollView } from "react-native";
import Card from '../Card';
import EventCard from '../EventCard';
import { doc, getDoc } from "firebase/firestore";

export default function Home(props) {
    const [name, setName] = React.useState(null);
    const [nextEvent, setNextEvent] = React.useState(null);
    useEffect(() => {
        if (props.auth.currentUser) {
            getDoc(doc(props.firestore, "accounts", props.auth.currentUser.uid)).then(ad => {
                setName(ad.data().first);
                if (ad.data().registered.length) {
                    props.getEvents().then(es => {
                        setNextEvent(es.data[ad.data().registered[0]])
                    });
                }
            });
        }
    });
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }}>
            <View style = {{ paddingHorizontal: 20 }}>
                <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 24, alignSelf: 'flex-start', marginBottom: 8 }}>
                    {"Welcome back" + (name ? ", " + name + "!" : "!")}
                </Text>
                <View style={{ width: 40, height: 0, borderColor: 'black', borderWidth: 0.5, marginBottom: 20 }} />
                { nextEvent ? (
                    <>
                        <Text style={{ fontFamily: 'OpenSans_600SemiBold', fontSize: 16, marginBottom: 15 }}>Your Next Event</Text>
                        <EventCard event = {nextEvent} height={200} storage={props.storage} />
                    </>
                ) : null }
                <Text style={{ fontFamily: 'OpenSans_600SemiBold', fontSize: 16, marginBottom: 15 }}>Upcoming Events</Text>
            </View>
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
                <Card img={require('./../../assets/banner.jpeg')} title="Event Name" height={125} time="Mon, Jan 1" style = {{ width: 150, marginRight: 20 }} />
                <Card img={require('./../../assets/banner.jpeg')} title="Event Name" height={125} time="Mon, Jan 1" style = {{ width: 150, marginRight: 20 }} />
                <Card img={require('./../../assets/banner.jpeg')} title="Event Name" height={125} time="Mon, Jan 1" style = {{ width: 150 }} />
            </ScrollView>
        </ScrollView>
    );
}