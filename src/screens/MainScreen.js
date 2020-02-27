import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { DATA } from "../data";
import Post from "../componens/Post";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post",{postId:post.id,date:post.date});
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => {
          return <Post post={item} onOpen={openPostHandler} />;
        }}
      />
    </View>
  );
};
MainScreen.navigationOptions = {
  headerTitle: "Мой блог"
};
const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
});
