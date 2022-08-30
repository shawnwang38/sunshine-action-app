import { Text, View, Stylesheet, ScrollView, RefreshControl } from "react-native";
import React from "react";
import EventCard from "../EventCard";
import { getDoc, doc } from "firebase/firestore";

export default function MyEvents(props) {
    const [name, setName] = React.useState([null]);
    const [upcoming, setUpcoming] = React.useState([]);
    const [past, setPast] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    React.useEffect(() => {
        if (props.auth.currentUser) {
            getDoc(doc(props.firestore, "accounts", props.auth.currentUser.uid)).then(ad => {
                if (name[0] === null) {
                    setName([ad.data().first, ad.data().last]);
                    props.getEvents().then(es => {
                        let now = new Date();
                        if (upcoming.length == 0) {
                            let eventList = Object.keys(es.data).filter(e => es.data[e].start > now.getTime() && ad.data().registered.indexOf(e) != -1).sort((a, b) => es.data[a].start - es.data[b].start).map(e => es.data[e]);
                            setUpcoming(eventList.map((e, n) => <EventCard big = "true" img = "false" check = "false" key = {n} event = {e} height={125} storage = {props.storage} navigation = {props.navigation} user = {[ad.data().first, ad.data().last]} style = {eventList[n + 1] ? {minWidth: 150, marginRight: 20} : {minWidth: 150}} />));
                        }
                        if (past.length == 0) {
                            let eventList = Object.keys(es.data).filter(e => es.data[e].start <= now.getTime() && ad.data().registered.indexOf(e) != -1).sort((a, b) => es.data[a].start - es.data[b].start).map(e => es.data[e]);
                            setPast(eventList.map((e, n) => <EventCard big = "true" img = "false" check = "false" key = {n} event = {e} height={125} storage = {props.storage} navigation = {props.navigation} user = {[ad.data().first, ad.data().last]} style = {eventList[n + 1] ? {minWidth: 150, marginRight: 20} : {minWidth: 150}} />));
                        }
                    });
                }
            });
        }
    });
    function refresh() {
        setRefreshing(true);
        if (props.auth.currentUser) {
            getDoc(doc(props.firestore, "accounts", props.auth.currentUser.uid)).then(ad => {
                setName([ad.data().first, ad.data().last]);
                props.getEvents().then(es => {
                    let now = new Date();
                    if (true) {
                        let eventList = Object.keys(es.data).filter(e => es.data[e].start > now.getTime() && ad.data().registered.indexOf(e) != -1).sort((a, b) => es.data[a].start - es.data[b].start).map(e => es.data[e]);
                        setUpcoming(eventList.map((e, n) => <EventCard big = "true" img = "false" check = "false" key = {n} event = {e} height={125} storage = {props.storage} navigation = {props.navigation} user = {[ad.data().first, ad.data().last]} style = {eventList[n + 1] ? {minWidth: 150, marginRight: 20} : {minWidth: 150}} />));
                    }
                    if (true) {
                        let eventList = Object.keys(es.data).filter(e => es.data[e].start <= now.getTime() && ad.data().registered.indexOf(e) != -1).sort((a, b) => es.data[a].start - es.data[b].start).map(e => es.data[e]);
                        setPast(eventList.map((e, n) => <EventCard big = "true" img = "false" check = "false" key = {n} event = {e} height={125} storage = {props.storage} navigation = {props.navigation} user = {[ad.data().first, ad.data().last]} style = {eventList[n + 1] ? {minWidth: 150, marginRight: 20} : {minWidth: 150}} />));
                    }
                    setRefreshing(false);
                });
            });
        }
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}>
            <View style = {{ padding: 20 }}>
                {upcoming.length ? <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                    <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'grey', fontSize: 15, paddingLeft: 10, marginBottom: 10 }}>My Upcoming Events</Text>
                </View> : null}
                {upcoming}
                {past.length ? <View style = {{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
                    <Text style = {{ fontFamily: 'OpenSans_400Regular', color: 'grey', fontSize: 15, paddingLeft: 10, marginBottom: 10 }}>My Previous Events</Text>
                </View> : null}
                {past}
                {!upcoming.length && !past.length ? <Text style = {{ textAlign: "center", fontFamily: "OpenSans_400Regular" }}>{"No events yet :("}</Text> : null}
            </View>
        </ScrollView>
    );
}