import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AuthSession } from 'expo';

export default function ListItem({
  title,
  image,
  description,
  itemId,
  requestAnime,
}) {

  return (
    <TouchableOpacity onPress={() => requestAnime(itemId)}>
      <View style={styles.item}>
        <Image
          source={{ uri: image }}
          style={{ width: 100, height: 100, marginTop: 20 }}
        />
        <Text ellipsizeMode='tail' style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text ellipsizeMode='tail' style={styles.description} numberOfLines={6}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SearchBar: {
    backgroundColor: 'grey',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    // height: 160,
    borderWidth: 0.3, 
    overflow: 'hidden',
  },
  title: {
    // flex: 1,
    fontWeight: 'bold',
    position: 'relative',
    left: 55,
    alignSelf: "flex-start",
    width: 200
    // fontFamily:'sans-serif',
  },
  description: {
    top: 30,
    marginTop: 20,
    left: 150,
    position: 'absolute',
    width: 250,
    // fontSize: 12
  },
});
