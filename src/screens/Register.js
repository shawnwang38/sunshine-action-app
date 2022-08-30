import React from "react";
import { ActivityIndicator, KeyboardAvoidingView, SafeAreaView, View, StyleSheet, TextInput, Text, Image, Button, Pressable, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Checkbox from "expo-checkbox";

const Register = (props) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [checked, onChangeChecked] = React.useState(false);
  const [loading, onChangeLoading] = React.useState(false);
  const [invalid, onChangeInvalid] = React.useState("");
  const passwordInput = React.useRef(null);
  function validMail(mail)
  {
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
  }
  function register() {
    if (!validMail(email)) {
      onChangeInvalid("Invalid email");
    } else if (password.length < 6) {
      onChangeInvalid("Invalid password");
    } else if (!checked) {
      onChangeInvalid("You must agree to the Terms & Conditions and Privacy Policy.");
    } else {
      onChangeInvalid("");
      onChangeLoading(true);
      createUserWithEmailAndPassword(props.auth, email, password).then(() => {
        onChangeLoading(false);
        props.navigation.navigate("Onboarding");
      }).catch((err) => {
        onChangeLoading(false);
        if (err.code == "auth/email-already-in-use") {
            onChangeInvalid("This email is already taken");
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
          onSubmitEditing={register}
          returnKeyType="done"
          editable = {!loading ? true : false}
        />
        <View style = {{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20, marginHorizontal: 20 }}>
            <Checkbox value = {checked} onValueChange={onChangeChecked} color = "cornflowerblue" />
            <Text style = {{ marginLeft: 10 }}>{"I agree to the Terms & Conditions and Privacy Policy."}</Text>
        </View>
        { invalid ? <Text style = {{ color: "red", textAlign: "center", marginTop: 20 }}>{invalid}</Text> : null }
        <View style = {{ marginTop: 20, marginHorizontal: 100 }}>
          { loading ? <ActivityIndicator style = {{marginBottom: 20 }} /> : null }
          <Button title="Register" color="cornflowerblue" onPress={register} disabled={loading} />
        </View>
        <View style = {{ marginTop: 20, marginBottom: 50, justifyContent: 'center', alignItems: 'center' }}>
          <Text style = {{ fontSize: 16, marginBottom: 15 }}>Have an account?</Text>
          <Button title = "Login" color = "coral" disabled = {loading} onPress = {() => { props.navigation.navigate("Login") }}></Button>
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

export default Register;