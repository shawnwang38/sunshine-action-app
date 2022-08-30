import React from "react";
import { ActivityIndicator, KeyboardAvoidingView, SafeAreaView, View, StyleSheet, TextInput, Text, Image, Button, Pressable, TouchableOpacity } from "react-native";
import { signInWithEmailAndPassword } from 'firebase/auth';

const SCREENS = ["Login", "Onboarding", "Verification", "Tabs"];

const Login = (props) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [loading, onChangeLoading] = React.useState(false);
  const [invalid, onChangeInvalid] = React.useState("");
  const passwordInput = React.useRef(null);
  function validMail(mail)
  {
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
  }
  function login() {
    if (!validMail(email)) {
      onChangeInvalid("Invalid email");
    } else if (password.length < 6) {
      onChangeInvalid("Invalid password");
    } else {
      onChangeInvalid("");
      onChangeLoading(true);
      signInWithEmailAndPassword(props.auth, email, password).then(() => {
        props.getRegisterStatus().then((s) => {
          props.navigation.navigate(SCREENS[s.data.status]);
        }).catch((err) => {
          onChangeLoading(false);
          console.log(err);
        });
      }).catch((err) => {
        onChangeLoading(false);
        if (err.code == "auth/invalid-email" || err.code == "auth/user-not-found") {
          onChangeInvalid("User not found");
        } else if (err.code == "auth/wrong-password") {
          onChangeInvalid("Invalid password");
        } else {
          onChangeInvalid(err.message);
        }
      });
    }
  }
  return (
    <SafeAreaView style = {props.style}>
      <KeyboardAvoidingView behavior = "position">
        <Image source={require('./../../assets/logo.png')} style={{height: 200, width: 200, resizeMode: "contain", alignSelf: "center", marginBottom: 40}} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          onSubmitEditing={() => passwordInput.current.focus()}
          returnKeyType="next"
          editable = {!loading ? true : false}
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          ref = {passwordInput}
          onSubmitEditing={login}
          returnKeyType="done"
          editable = {!loading ? true : false}
        />
        { invalid ? <Text style = {{ color: "red", textAlign: "center"}}>{invalid}</Text> : null }
        <View style = {{ marginTop: 20, marginHorizontal: 100 }}>
          { loading ? <ActivityIndicator style = {{marginBottom: 20 }} /> : null }
          <Button title="Login" color="coral" onPress={login} disabled={loading} />
        </View>
        <View style = {{ marginTop: 20, marginBottom: 50, justifyContent: 'center', alignItems: 'center' }}>
          <Text style = {{ fontSize: 16, marginBottom: 15 }}>No account yet?</Text>
          <Button title = "Register" color = "cornflowerblue" disabled = {loading} onPress = {() => { props.navigation.navigate("Register") }}>Register</Button>
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

export default Login;