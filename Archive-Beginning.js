/* Hold old code or alt verions of App.js from previoous learning*/

import React from 'react'
import { 
  StyleSheet,
  View, 
  Text,
  ActivityIndicator, 
  Button, 
  Alert,
  Dimensions,
  Platform,
  Image
 } from "react-native"

 import favicon from "./assets/favicon.png"

const { height, width } = Dimensions.get("window");  {/*  record the dimensions of the window */}

{/* A function that is called on button press*/}
export default function App() {
  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  }

  return (
    <View style={styles.page}>
      {/*   Some interestng things to play with
      <ActivityIndicator size="large" color="#61DBFB" /> 
      <Button title="click me" onPress={onButtonPress} />
      */}
      <Text style={styles.text}> Height: {height}</Text>
      <Text style={[styles.text, styles.selectedText]}> Width: {width}</Text>
      <Text style={styles.text}> OS: {Platform.OS} </Text>
      <Image style={styles.image} source={favicon} />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: 40,
    backgeroundColor: "#DDD"
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    color: "red",
    backgroundColor: "yellow",
    margin: 10,
    padding: 5
  },
  selectedText: {
    alignSelf: "center",
    backgroundColor: "red",
    color: "yellow"
  },
  image: {
    alignSelf: "flex-end"
  }
})