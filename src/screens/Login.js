import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Image, Button, Pressable, TouchableOpacity } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
    
    <Image source={require('./../../assets/logo.png')} style={{height: 200, width: 200, alignSelf: "center", marginTop: 150}} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      
        <Button title="Login" color="coral" />
        
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