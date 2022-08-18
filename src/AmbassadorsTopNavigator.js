import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ContactCard from './ContactCard';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function NearbyScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFF7E3"
            }}
        >
            <ContactCard title="Full Name" location="City, State/Province, Country" />
            <ContactCard title="Full Name" location="City, State/Province, Country" />
            <ContactCard title="Full Name" location="City, State/Province, Country" />
        </View>
    )
}

function InvitesScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFF7E3"
            }}
        >
        <ContactCard title="Full Name" location="City, State/Province, Country" />
            <ContactCard title="Full Name" location="City, State/Province, Country" />
            <ContactCard title="Full Name" location="City, State/Province, Country" />
        </View>
    )
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator 
            initialRouteName="Nearby"
            tabBarOptions={{
                labelStyle: { fontSize: 12 },
                style: { backgroundColor: '#FFF7E3' }
            }}
        >
            <Tab.Screen
                name="Nearby"
                component={NearbyScreen}
                options={{ tabBarLabel: 'Nearby'}}
            />
            <Tab.Screen
                name="Invites"
                component={InvitesScreen}
                options={{ tabBarLabel: 'Invites'}}
            />
        </Tab.Navigator>
    )
}

export default function AmbassadorsTopBarNavigator() {
    return (
        <NavigationContainer independent={true}>
            <MyTabs />
        </NavigationContainer>
    )
}