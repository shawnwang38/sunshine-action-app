import React from "react";
import { Switch, ActivityIndicator, KeyboardAvoidingView, SafeAreaView, View, StyleSheet, TextInput, Text, Image, Button, Pressable, TouchableOpacity } from "react-native";
import { getFunctions, httpsCallable } from "firebase/functions";
import { signOut, onIdTokenChanged, sendEmailVerification } from "firebase/auth";

const Verification = (props) => {
  const [loading, onChangeLoading] = React.useState(false);
  function signOutApp() {
    signOut(props.auth).then(() => {
        props.navigation.navigate("Login");
    });
  }
  function resend() {
    onChangeLoading(true);
    sendEmailVerification(props.auth.currentUser).then(() => {
        onChangeLoading(false);
    }).catch((err) => {
        onChangeLoading(false);
    });
  }
  React.useEffect(() => {
    const unsubscribe = onIdTokenChanged(props.auth, user => {
        if (user && user.emailVerified) {
            props.navigation.navigate("Tabs");
        }
    });
    return unsubscribe;
  });
  return (
    <SafeAreaView style = {props.style}>
      <KeyboardAvoidingView behavior = "position">
        <Image source={require('./../../assets/logo.png')} style={{ height: 200, width: 200, resizeMode: "contain", alignSelf: "center", marginBottom: 40}} />
        <Text style = {{ textAlign: "center", marginHorizontal: 30 }}>We need to verify your email address. Please check your inbox for an email from us and use it to complete the verification process. When you are done, you can re-login.</Text>
        <View style = {{ marginTop: 20 }}>
          { loading ? <ActivityIndicator style = {{ marginBottom: 20 }} /> : null }
          <Button title="Login" color="cornflowerblue" onPress={signOutApp} disabled={loading} />
          <Button title="Resend" color="coral" onPress={resend} disabled={loading} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 70,
    marginRight: 70,
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
  },
});

export default Verification;