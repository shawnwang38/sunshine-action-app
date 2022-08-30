import React, { Component, useEffect } from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity, Dimensions, FlatList, StyleSheet, StatusBar, Button, ActivityIndicator, RefreshControl } from "react-native";
import { Constants, AppLoading } from 'expo' 
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { getDownloadURL, ref } from 'firebase/storage';

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fd(t) {
  const postDate = new Date(t);
  return MONTHS[postDate.getMonth()] + " " + postDate.getDate() + ", " + postDate.getHours() + ":" + (postDate.getMinutes() < 10 ? "0" : "") + postDate.getMinutes()
}
const News = (props) => {
  const [posts, setPosts] = React.useState([]);
  const [finished, setFinished] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.image ? <Image
          source={{ uri: item.image }}
          style={styles.cardImage}
  /> : null}
      <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>{item.title} {item.author ? <Text style = {styles.cardAuthor}>{item.author}</Text> : null}</Text>
      <Text style={styles.cardTime}>{fd(item.time)}</Text>
      </View>
      <View style={styles.cardContent}>
      <Text>{item.body}</Text>
      </View>
    </View>
  );
  useEffect(() => {
    const temp = [];
    const pimg = [];
    props.getPosts({ start: 0 }).then((r) => {
      if (r.data.posts.length < 4) {
        setFinished(true);
      }
      r.data.posts.forEach(p => {
        temp.push(p);
        if (p.image) {
          pimg.push(getDownloadURL(ref(props.storage, "posts/" + p.time.toString() + "." + p.image)).then(url => {
            p.image = url;
          }));
        }
      });
      Promise.all(pimg).then(() => { setPosts(temp) });
    });
  }, []);
  function loadMore() {
    if (finished) {
      return;
    }
    const temp = [];
    const pimg = [];
    props.getPosts({ start: posts[posts.length - 1].time }).then((r) => {
      if (r.data.posts.length < 4) {
        setFinished(true);
      }
      r.data.posts.forEach(p => {
        temp.push(p);
        if (p.image) {
          pimg.push(getDownloadURL(ref(props.storage, "posts/" + p.time.toString() + "." + p.image)).then(url => {
            p.image = url;
          }));
        }
      });
      Promise.all(pimg).then(() => { setPosts(posts.concat(temp)) });
    });
  }
  function refresh() {
    setFinished(false);
    setRefreshing(true);
    const temp = [];
    const pimg = [];
    props.getPosts({ start: 0 }).then((r) => {
      if (r.data.posts.length < 4) {
        setFinished(true);
      }
      r.data.posts.forEach(p => {
        temp.push(p);
        if (p.image) {
          pimg.push(getDownloadURL(ref(props.storage, "posts/" + p.time.toString() + "." + p.image)).then(url => {
            p.image = url;
          }));
        }
      });
      Promise.all(pimg).then(() => { setPosts(temp); setRefreshing(false) });
    });
  }
  return (
    <SafeAreaView style={styles.container}>
      {posts.length ? <>
        <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={loadMore}
        refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={refresh} />}
      />
      </> : <ActivityIndicator />}
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
    color: 'black',
    fontFamily: "OpenSans_400Regular",
    fontWeight: "bold"
  },
  cardAvatar: {
    marginRight: 16
  },
  cardContent: {
    padding: 10,
    borderTopWidth: 0.25,
    borderColor: 'black',
    fontFamily: "OpenSans_400Regular"
  },
  cardTime: {
    color: 'black',
    fontFamily: "OpenSans_400Regular",
  },
  cardAuthor: {
    color: 'darkgray',
    fontFamily: "OpenSans_400Regular",
    fontSize: 16
  }
});

export default News;