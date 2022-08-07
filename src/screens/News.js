import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


const DATA = [
  {
    id: 1,
    postTitle: 'Events 2nd Week of August 2022',
    postText:
      " SUNSHINE ACTION 耀陽行動 ✨Event 2️⃣nd week of Aug 2022:"    
  },

  {
    id: 2,
    postTitle: 'Events 3rd Week of August 2022',
    postText:
      " SUNSHINE ACTION 耀陽行動 ✨Event 2️⃣nd week of Aug 2022:"    
  }
]



export default NewsScreen

const NewsScreen = () => {
  return (
    <List
      style={this.props.themedStyle.container}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={DATA.id}
    />
  )
}