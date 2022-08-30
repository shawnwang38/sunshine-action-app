import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import EventCard from './EventCard.js';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { doc, getDoc } from "firebase/firestore";


function UpcomingScreen({ navigation, route }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const ctx = React.useContext(Context);
    function refresh() {
        setRefreshing(true);
        ctx.getEvents().then(es => {
            let now = new Date();
            let eventList = Object.keys(es.data).filter(e => es.data[e].start > now.getTime()).sort((b, a) => es.data[a].start - es.data[b].start).map(e => es.data[e]);
            navigation.setParams({ upcoming: eventList.map((e, n) => <EventCard location = {true} key = {n} event = {e} height={200} storage = {ctx.storage} navigation = {ctx.navigation} user = {ctx.name} />) });
            setRefreshing(false);
        });
    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFF7E3"
            }}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }} refreshControl = {<RefreshControl refreshing = {refreshing} onRefresh = {refresh} />}>
                <View style = {{ width: 350, paddingHorizontal: 10, paddingVertical: 40, justifyContent: 'center',  fontFamily: 'OpenSans_700Bold', fontSize: 10, backgroundColor: 'transparent',}}>
                    {route.params.upcoming}
                </View>
            </ScrollView>
        </View>
    )
}

function PastScreen({ navigation, route }) {
    const [refreshing, setRefreshing] = React.useState(false);
    const ctx = React.useContext(Context);
    function refresh() {
        setRefreshing(true);
        ctx.getEvents().then(es => {
            console.log(es.data);
            let now = new Date();
            let eventList = Object.keys(es.data).filter(e => es.data[e].start <= now.getTime()).sort((b, a) => es.data[a].start - es.data[b].start).map(e => es.data[e]);
            navigation.setParams({ past: eventList.map((e, n) => <EventCard location = {true} key = {n} event = {e} height={200} storage = {ctx.storage} navigation = {ctx.navigation} user = {ctx.name} />) });
            setRefreshing(false);
        });
    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFF7E3"
            }}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{ flexShrink: 0 }} refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={refresh} />}>
                <View style = {{ width: 350, paddingHorizontal: 10, paddingVertical: 40, justifyContent: 'center',  fontFamily: 'OpenSans_700Bold', fontSize: 10, backgroundColor: 'transparent',}}>
                    {route.params.past}
                </View>
            </ScrollView>
        </View>
    )
}

const Tab = createMaterialTopTabNavigator();
const Context = React.createContext(() => {});

function MyTabs(props) {
    return (
            <Tab.Navigator 
                initialRouteName="Events"
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 12, fontFamily: 'OpenSans_600SemiBold' },
                    tabBarStyle: { backgroundColor: '#FFF7E3' },
                    tabBarIndicatorStyle: { backgroundColor: 'orange' },
                }}
            >
                <Tab.Screen
                    name="Upcoming"
                    component = {UpcomingScreen}
                    initialParams = {{ upcoming: props.upcoming }}
                    options={{ tabBarLabel: 'Upcoming'}}
                />
                <Tab.Screen
                    name="Past"
                    component = {PastScreen}
                    initialParams = {{ past: props.past }}
                    options={{ tabBarLabel: 'Past'}}
                />
            </Tab.Navigator>
    )
}

export default function DiscoverTopBarNavigator(props) {
    const [upcoming, setUpcoming] = React.useState([]);
    const [past, setPast] = React.useState([]);
    const [name, setName] = React.useState([null]);
    const [loading, setLoading] = React.useState(true);
    useEffect(() => {
        if (props.auth.currentUser) {
            getDoc(doc(props.firestore, "accounts", props.auth.currentUser.uid)).then(ad => {
                if (name[0] === null) {
                    setName([ad.data().first, ad.data().last]);
                    props.getEvents().then(es => {
                        let now = new Date();
                        if (upcoming.length == 0) {
                            let eventList = Object.keys(es.data).filter(e => es.data[e].start > now.getTime()).sort((a, b) => es.data[a].start - es.data[b].start).map(e => es.data[e]);
                            setUpcoming(eventList.map((e, n) => <EventCard location = {true} key = {n} event = {e} height={200} storage = {props.storage} navigation = {props.navigation} user = {[ad.data().first, ad.data().last]} />));
                        }
                        if (past.length == 0) {
                            let eventList = Object.keys(es.data).filter(e => es.data[e].start <= now.getTime()).sort((b, a) => es.data[a].start - es.data[b].start).map(e => es.data[e]);
                            setPast(eventList.map((e, n) => <EventCard location = {true} key = {n} event = {e} height={200} storage = {props.storage} navigation = {props.navigation} user = {[ad.data().first, ad.data().last]} />));
                        }
                        setLoading(false);
                    });
                }
            });
        }
    });
    return (
        <Context.Provider value = {{ getEvents: props.getEvents, storage: props.storage, navigation: props.navigation, name: name }}>
            <NavigationContainer independent={true}>
                {loading ? null : <MyTabs getEvents = {props.getEvents} upcoming = {upcoming} past = {past} />}
            </NavigationContainer>
        </Context.Provider>
    )
}