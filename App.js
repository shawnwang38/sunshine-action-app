import { useState, useRef, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { getFunctions, httpsCallable } from "firebase/functions";
import { getStorage } from "firebase/storage";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic 
} from '@expo-google-fonts/open-sans'
import Header from './src/Header';
import Home from './src/screens/Home';
import Donate from './src/screens/Donate';
import Discover from './src/screens/Discover';
import Events from './src/screens/Events';
import Account from './src/screens/Account';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Onboarding from './src/screens/Onboarding';
import Verification from "./src/screens/Verification";
import News from './src/screens/News';
import DiscoverTopBarNavigator from './src/DiscoverTopNavigator';
import Ambassadors from './src/screens/Ambassadors';
import AmbassadorsTopBarNavigator from './src/AmbassadorsTopNavigator';
import AccountSettings from './src/screens/AccountSettings';
import EventDetails from './src/screens/EventDetails';
import AccountsBarNavigator from './src/AccountsNavigator';
import MyEvents from "./src/screens/AccountMyEvents";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const firebaseConfig = {
  apiKey: "AIzaSyBY7mnxC1Qt3UpOENwPTPmUzGalU-FZjpg",
  authDomain: "sunshine-action-app.firebaseapp.com",
  projectId: "sunshine-action-app",
  storageBucket: "sunshine-action-app.appspot.com",
  messagingSenderId: "812985980379",
  appId: "1:812985980379:web:b0f15b41fa0f47819803fe",
  measurementId: "G-7VLYZNHMKB"
};

initializeApp(firebaseConfig);

const functions = getFunctions(undefined, "asia-east2");
const getRegisterStatus = httpsCallable(functions, "getRegisterStatus");
const updateUserInfo = httpsCallable(functions, "updateUserInfo");
const getEvents = httpsCallable(functions, "getEvents");
const registerEvent = httpsCallable(functions, "registerEvent");

const HomeStack = createNativeStackNavigator();
function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, contentStyle: styles.container }}>
      <HomeStack.Screen component = {HomeScreen} name="Home" />
      <HomeStack.Screen component = {EventDetailsScreen} name="Event Details" initialParams={{ home: "HomeStack" }} />
    </HomeStack.Navigator>
  )
}
function HomeScreen({ navigation }) {
  return (
    <SafeAreaProvider style = {{flex: 1}}>
      <SafeAreaView style ={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
          <Header text = 'Home' auth = {auth} />
          <Home auth = {auth} firestore = {firestore} getEvents={getEvents} storage={storage} navigation={navigation} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const DiscoverStack = createNativeStackNavigator();
function DiscoverStackScreen({ navigation }) {
  return (
    <DiscoverStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, contentStyle: styles.container }}>
      <DiscoverStack.Screen component = {DiscoverScreen} name="Discover" />
      <DiscoverStack.Screen component = {EventDetailsScreen} name="Event Details" initialParams={{ home: "DiscoverStack" }} />
    </DiscoverStack.Navigator>
  )
}
function DiscoverScreen({ navigation }) {
  return (
    <SafeAreaProvider style = {{flex: 1}}>
      <SafeAreaView style ={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }} >
        <Header text='Events' />
        <DiscoverTopBarNavigator auth = {auth} firestore = {firestore} getEvents={getEvents} storage={storage} navigation={navigation} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
function NewsScreen() {
  return (
    <SafeAreaView style ={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
      <Header text = 'News' />
      <News />
    </SafeAreaView>
  );
}
function DonateScreen() {
  return (
    <SafeAreaView style ={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
      <Header text = 'Donate' />
      <Donate />
    </SafeAreaView>
  );
}
function AccountScreen() {
  return (
    <SafeAreaView style ={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
      <Header text = 'Account' />
      <Account/>
      <MyEvents/>
    </SafeAreaView>
  );
}
function AccountSettingsScreen() {
  return (
    <SafeAreaView style ={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
      <Header text = 'Account Settings' />
      <AccountSettings />
    </SafeAreaView>
  );
}
function LoginScreen({ navigation }) {
  return (
      <Login style = {styles.container} auth = {auth} navigation = {navigation} getRegisterStatus={getRegisterStatus} />
  );
}
function RegisterScreen({ navigation }) {
  return (
      <Register style = {styles.container} auth = {auth} navigation = {navigation} />
  );
}
function OnboardingScreen({ navigation }) {
  return (
      <Onboarding style = {styles.container} auth = {auth} navigation = {navigation} getRegisterStatus={getRegisterStatus} updateUserInfo={updateUserInfo} />
  );
}
function VerificationScreen({ navigation }) {
  return (
      <Verification style = {styles.container} auth = {auth} navigation = {navigation} getRegisterStatus={getRegisterStatus} />
  );
}
function AmbassadorsScreen() {
  return (
    <SafeAreaView style ={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
      <Header text="Find an Ambassador" />
      <Ambassadors />
    </SafeAreaView>
  );
}
function EventDetailsScreen({ navigation, route }) {
  return (
    <SafeAreaProvider style = {{flex: 1}}>
      <SafeAreaView style ={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
        <Header text="Event Details" />
        <EventDetails home = {route.params.home} navigation = {navigation} event = {route.params.event} img = {route.params.img} user = {route.params.user} registerEvent = {registerEvent} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const auth = getAuth();
const firestore = getFirestore();
const storage = getStorage();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ navigation }) {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (!user) {
        navigation.navigate("Login");
      }
    });
    return unsubscribe;
  });
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeStack') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'DiscoverStack') {
            iconName = focused ? 'ios-compass' : 'ios-compass-outline';
          } else if (route.name === 'News') {
            iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline';
          } else if (route.name === 'Donate') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } 
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'coral',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#ECD2B3' }
      })}
      sceneContainerStyle = {styles.container}
    >
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen name="DiscoverStack" component={DiscoverStackScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Donate" component={DonateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}
export default function App() {
  const SCREENS = ["Login", "Onboarding", "Verification", "Tabs"];
  const [status, onChangeStatus] = useState(null);
  const rootNav = useRef(null);
  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      getRegisterStatus().then((s) => {
        if (status != s.data.status) {
          onChangeStatus(s.data.status);
        }
      }).catch(() => {
        if (status != 0) {
          onChangeStatus(0);
        }
      });
    });
  });
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold
  });
  if (!fontsLoaded || status === null) {
    return <AppLoading />;
  }
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='black' />
      <NavigationContainer ref = {rootNav}>
        <Stack.Navigator initialRouteName={ SCREENS[status] }>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={AccountSettings} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Verification" component={VerificationScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E3',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});
