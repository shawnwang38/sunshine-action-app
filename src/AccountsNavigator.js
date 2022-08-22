import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyEvents from './screens/AccountMyEvents';
import MyDonations from './screens/AccountMyDonations';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function MyEventsScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFF7E3"
            }}
        >
            <MyEvents />
        </View>
    )
}

function MyDonationsScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFF7E3"
            }}
        >
            <MyDonations />
        </View>
    )
}

const Tab = createMaterialTopTabNavigator();

function MyAccountTabs() {
    return (
        <Tab.Navigator 
            initialRouteName="My Events"
            tabBarOptions={{
                labelStyle: { fontSize: 12 },
                style: { backgroundColor: '#FFF7E3' }
            }}
        >
            <Tab.Screen
                name="My Events"
                component={MyEventsScreen}
                options={{ tabBarLabel: 'My Events'}}
            />
            <Tab.Screen
                name="My Donations"
                component={MyDonationsScreen}
                options={{ tabBarLabel: 'My Donations'}}
            />
        </Tab.Navigator>
    )
}

export default function AccountsBarNavigator() {
    return (
        <NavigationContainer independent={true}>
            <MyAccountTabs />
        </NavigationContainer>
    )
}