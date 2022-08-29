import React, { Component, useEffect } from 'react'
import { Text, View, ScrollView, RefreshControl } from "react-native";
import Card from '../Card';
import EventCard from '../EventCard';
import { doc, getDoc } from "firebase/firestore";

export default function Home(props) {
    const [name, setName] = React.useState([null]);
    const [nextEvent, setNextEvent] = React.useState(null);
    const [refreshing, setRefreshing] = React.useState(false);
    const [upcoming, setUpcoming] = React.useState([]);
    useEffect(() => {
        if (props.auth.currentUser) {
            getDoc(doc(props.firestore, "accounts", props.auth.currentUser.uid)).then(ad => {
                if (ad.data().first != name[0]) {
                    setName([ad.data().first, ad.data().last]);
                    props.getEvents().then(es => {
                        let now = new Date();
                        const registered = ad.data().registered.sort((a, b) => es.data[a].start - es.data[b].start).filter(e => es.data[e].start > now.getTime());
                        if (registered.length) {
                            setNextEvent(es.data[registered[0]]);
                        }
                        if (upcoming.length == 0) {
                            let eventList = Object.keys(es.data).filter(e => es.data[e].start > now.getTime()).sort((a, b) => es.data[a].start - es.data[b].start).map(e => es.data[e]);
                            eventList = eventList.slice(0, 3);
                            if (registered.length) {
                                eventList = eventList.filter(e => e.id != registered[0]);
                            }
                            setUpcoming(eventList.map((e, n) => <EventCard key = {n} event = {e} height={125} storage = {props.storage} navigation = {props.navigation} user = {name} style = {eventList[n + 1] ? {minWidth: 150, marginRight: 20} : {minWidth: 150}} />));
                        }
                    });
                }
            });
        }
    });
    function refresh() {
        getDoc(doc(props.firestore, "accounts", props.auth.currentUser.uid)).then(ad => {
            setName([ad.data().first, ad.data().last]);
            props.getEvents().then(es => {
                let now = new Date();
                const registered = ad.data().registered.sort((a, b) => es.data[a].start - es.data[b].start).filter(e => es.data[e].start > now.getTime());
                if (registered.length) {
                    setNextEvent(es.data[registered[0]]);
                } else {
                    setNextEvent(null);
                }
                let eventList = Object.keys(es.data).filter(e => es.data[e].start > now.getTime()).sort((a, b) => es.data[a].start - es.data[b].start).map(e => es.data[e]);
                eventList = eventList.slice(0, 3);
                if (registered.length) {
                    eventList = eventList.filter(e => e.id != registered[0]);
                }
                setUpcoming(eventList.map((e, n) => <EventCard key = {n} event = {e} height={125} storage = {props.storage} navigation = {props.navigation} user = {name} style = {eventList[n + 1] ? {minWidth: 150, marginRight: 20} : {minWidth: 150}} />));
            });
        });
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}>
            <View style = {{ paddingHorizontal: 20 }}>
                <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 24, alignSelf: 'flex-start', marginBottom: 8 }}>
                    {"Welcome back" + (name[0] ? ", " + name[0] + "!" : "!")}
                </Text>
                <View style={{ width: 40, height: 0, borderColor: 'black', borderWidth: 0.5, marginBottom: 20 }} />
                { nextEvent ? (
                    <>
                        <Text style={{ fontFamily: 'OpenSans_600SemiBold', fontSize: 16, marginBottom: 15 }}>Your Next Event</Text>
                        <EventCard event = {nextEvent} height={200} storage={props.storage} navigation={props.navigation} user={name} />
                    </>
                ) : null }
                {upcoming.length ? <Text style={{ fontFamily: 'OpenSans_600SemiBold', fontSize: 16, marginBottom: 15 }}>Upcoming Events</Text> : null}
            </View>
            <ScrollView horizontal pagingEnabled contentContainerStyle={{ flexDirection: 'row', paddingVertical: 5, paddingHorizontal: 20 }}>
                {upcoming}
            </ScrollView>
            <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 24, alignSelf: 'flex-start', marginBottom: 8, color: 'black', paddingLeft: 20 }}>About Us</Text>
                <Text style={{ fontFamily: 'OpenSans_700Bold', fontSize: 16, alignSelf: 'flex-start', marginBottom: 8, color: 'grey', paddingHorizontal: 20, paddingBottom: 30 }}>
                Sunshine Action is a non-profit organisation founded in Hong Kong in 2008. Since our establishment, the charity has partnered with 642 local centres and organisations across 20 countries including the USA, Chile, and Vietnam, helping over 340,000 individuals and families. Our programs span 14 of the UN Sustainable Development Goals, mainly focusing on food and hunger. We are non-religious, non-political and non-discriminatory, and are also 100% based on volunteers which means that 95% of funding goes directly towards those in need.
                </Text>
        </ScrollView>
    );
}