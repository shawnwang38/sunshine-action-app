import React from "react";
import { ActivityIndicator, KeyboardAvoidingView, SafeAreaView, View, StyleSheet, TextInput, Text, Image, Button, Pressable, TouchableOpacity } from "react-native";

const UselessTextInput = (props) => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [loading, onChangeLoading] = React.useState(false);
  const passwordInput = React.useRef(null);
  function login() {
    onChangeLoading(true);
  }
  return (
    <SafeAreaView style = {props.style}>
      <KeyboardAvoidingView behavior = "position">
        <Image source={require('./../../assets/logo.png')} style={{height: 200, width: 200, resizeMode: "contain", alignSelf: "center", marginBottom: 40}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Email"
          keyboardType="email-address"
          onSubmitEditing={() => passwordInput.current.focus()}
          returnKeyType="next"
          editable = {!loading ? true : false}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Password"
          secureTextEntry={true}
          ref = {passwordInput}
          onSubmitEditing={login}
          returnKeyType="done"
          editable = {!loading ? true : false}
        />
        <View style = {{ marginTop: 20 }}>
          <ActivityIndicator style = {{marginBottom: 20, display: !loading ? "none" : "flex" }} />
          <Button title="Login" color="coral" onPress={login} disabled={loading} />
        </View>
        <View style = {{ marginTop: 20, marginBottom: 50, justifyContent: 'center', alignItems: 'center' }}>
          <Text style = {{ fontSize: 16 }}>No account yet?</Text>
          <Button title="Register" color="cornflowerblue" disabled={loading} />
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
  }
});

export default UselessTextInput;