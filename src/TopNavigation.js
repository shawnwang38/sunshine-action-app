import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Events from "./screens/Events.js"
import Discover from "./screens/Discover.js"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function EventScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFF7E3"
            }}
        >
            <Events />
        </View>
    )
}

function CalendarScreen() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFF7E3"
            }}
        >
            <Discover />
        </View>
    )
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator 
            initialRouteName="Events"
            tabBarOptions={{
                labelStyle: { fontSize: 12 },
                style: { backgroundColor: '#FFF7E3' }
            }}
        >
            <Tab.Screen
                name="Events"
                component={EventScreen}
                options={{ tabBarLabel: 'Events'}}
            />
            <Tab.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{ tabBarLabel: 'Calendar'}}
            />
        </Tab.Navigator>
    )
}

export default function TopBarNavigator() {
    return (
        <NavigationContainer independent={true}>
            <MyTabs />
        </NavigationContainer>
    )
}