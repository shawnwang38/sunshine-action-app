import React from "react";
import { Switch, ActivityIndicator, KeyboardAvoidingView, SafeAreaView, View, StyleSheet, TextInput, Text, Image, Button, Pressable, TouchableOpacity } from "react-native";
import { getFunctions, httpsCallable } from "firebase/functions";
import { sendEmailVerification } from "firebase/auth";

const Onboarding = (props) => {
  const [first, onChangeFirst] = React.useState("");
  const [last, onChangeLast] = React.useState("");
  const [old, setOld] = React.useState(false);
  const [loading, onChangeLoading] = React.useState(false);
  const [invalid, onChangeInvalid] = React.useState("");
  const lastInput = React.useRef(null);
  function onboard() {
    if (!/\S/.test(first) || !/\S/.test(last)) {
      onChangeInvalid("Invalid name");
    } else {
      onChangeInvalid("");
      onChangeLoading(true);
      props.updateUserInfo({ first: first, last: last, young: !old }).then(() => {
        sendEmailVerification(props.auth.currentUser).then(() => {
          props.navigation.navigate("Verification");
        }).catch((err) => {
          onChangeInvalid(err.message);
          onChangeLoading(false);
        });        
      }).catch((err) => {
        onChangeInvalid(err.message);
        onChangeLoading(false);
      });
    }
  }
  return (
    <SafeAreaView style = {props.style}>
      <KeyboardAvoidingView behavior = "position">
        <Image source={require('./../../assets/logo.png')} style={{height: 200, width: 200, resizeMode: "contain", alignSelf: "center", marginBottom: 40}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeFirst}
          value={first}
          placeholder="First"
          onSubmitEditing={() => lastInput.current.focus()}
          returnKeyType="next"
          editable = {!loading ? true : false}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeLast}
          value={last}
          placeholder="Last"
          ref = {lastInput}
          returnKeyType="done"
          editable = {!loading ? true : false}
        />
        <View style = {{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor="cornflowerblue" ios_backgroundColor="#3e3e3e" onValueChange={() => { setOld(s => !s) }} value={old} />
            <Text style = {{ marginLeft: 10 }}>I am 16 years old or older.</Text>
        </View>
        { invalid ? <Text style = {{ color: "red", textAlign: "center", marginTop: 20 }}>{invalid}</Text> : null }
        <View style = {{ marginTop: 20 }}>
          { loading ? <ActivityIndicator style = {{marginBottom: 20 }} /> : null }
          <Button title="Continue" color="cornflowerblue" onPress={onboard} disabled={loading} />
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

export default Onboarding;