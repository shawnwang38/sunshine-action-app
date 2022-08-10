import React, { Component } from 'react'
import { SafeAreaView, View, Image, TouchableOpacity, Dimensions, FlatList, StyleSheet, StatusBar } from "react-native";
import { Constants, AppLoading } from 'expo' 
import { Text, Avatar, withStyles, List } from 'react-native-elements';


const DATA = [
  {
    id: 1,
    postTitle: 'Events 2nd Week of August 2022',
    postImageURI:'https://i.imgur.com/4PQxeow.jpeg',
    postText: "WED 10 AUG 2022 Morning: \n -Re-stocking the Sunshine Action warehouse with few pallets of food. \n -Few centers will pick up few hundreds of Sunshine Fortune Bags \n - Time: 10:00 a.m. – 12:00 noon \n - Meeting venue: Sunshine Action, 13 floor, Wing Kin Ind. Building, -6 Wing Kin road, Kwai Fong. \n \n  2️⃣ FRI 12 AUG 2022 Evening http://www.sunshine-action.org/street-sleepers Distribute food and beverages to homeless in Nam Cheong & SSP \n - Time: 5:50 -7:30 p.m. \n - Meeting venue: Corner of V Walk next to Nam Cheong MTR Exit D1 \n \n 3️⃣ SAT 13 AUG 2022 Morning \n - lead by Sunny http://www.sunshine-action.org/fortune-bags \n - Time: 9:00 a.m. – 12:00 noon \n - Task: Packing 5️⃣0️⃣0️⃣ Sunshine Fortune Bags \n - Meeting venue: Sunshine Action, 13 floor, Wing Kin Ind. Building, -6 Wing Kin road, Kwai Fong. \n \n 4️⃣ SAT 13 AUG 2022 Morning 🌌 http://www.sunshine-action.org/fortune-bags - Time: 10:00 – 11:30 a.m. \n - Distribution of the Sunshine Fortune Bags to elderly \n - Meeting Venue: 香港聖公會慈光堂長者中心Kindly Light Church Elderly Center \n - 九龍慈雲山蒲崗村道167號 G/F, 167 Po Kong Village Road, Tsz Wan Shan, Kowloon \n - Requirement: covid-test from home before the event is required Target Elderly：20戶（因疫情問題不入屋 Delivery to door） Volunteers needed：10（team min. 2 volunteers） \n \n 5️⃣ SAT 13 AUG 2022 Morning 🌌 reserved for Corporate Volunteers http://www.sunshine-action.org/fortune-bags \n - Time: 9:30 p.m. – 12:30 noon \n - Distribution of the Sunshine Fortune Bags to elderly \n - Lead by Albert 63323418 \n - Venue: H.K.S.K.H. St. Matthew's Neighbourhood Elderly Centre 聖公會聖馬太長者鄰舍中心 \n -德輔道西38號2字樓B室 Room B, 2/F, 38 Des Voeux Rd W, Sheung Wan Tel： 2548 2555 \n - Requirement: covid-test from home before the event is required \n - 另我早前聯絡部分住劏房、吾係住劏房既長者都比較貧乏，有部分長者因擔憂疫情，僅接受不入屋門外交談。 ✨ For more info, pls Whatsapp ☀️ Sunny 📲+852 68884028 "

  },

  {
    id: 2,
    postTitle: 'Fortune Bag News 10/08/22',
    postImageURI: 'https://i.imgur.com/0IZUQvo.jpeg',
    postText: "In Aug 2022, we officially broke the record of 2021 in term of quantity of beneficiary organizations and numbers of institutions which students joined S.A. programs ( 2021: 191 centers / 44 institutions ). \n ✨ Many centers are having their second round of Fortune Bags distribution. \n \n ✨ Jan-May : 13’300 fortune Bags \n ✨ June-Aug : 7’000 fortune Bags \n \n All these are thanks to your support & backing up behind-the-scene! God Bless You! 🙏🏻 Let’s hope to bring very Positive energy to the community through charitable deeds 🙏🏻✨"    
  },

  {
    id: 3,
    postTitle: 'Events 4th Week of August 2022',
    postImageURI: 'https://i.imgur.com/NjVrzb7.jpg',
    postText: " SUNSHINE ACTION 耀陽行動 ✨Event 2️⃣nd week of Aug 2022:"    
  }
]



const News = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
          source={{ uri: item.postImageURI }}
          style={styles.cardImage}
        />
      <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>{item.postTitle}</Text>
      </View>
      <View style={styles.cardContent}>
      <Text>{item.postText}</Text>
      </View>
    </View>


  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    marginBottom: 25
  },
  cardImage: {
    width: '100%',
    height: 400
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardTitle: {
    fontSize: 25,
    color: 'black'
  },
  cardAvatar: {
    marginRight: 16
  },
  cardContent: {
    padding: 10,
    borderWidth: 0.25,
    borderColor: 'black'
  }
});

export default News;