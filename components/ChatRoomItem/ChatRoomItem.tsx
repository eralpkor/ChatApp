import React from 'react';
import { Image, Pressable } from 'react-native';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/core';
import styles from './styles';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../Themed'; // take cares Dark Mode.

export default function ChatRoomItem({ chatRoom }) {
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onPress = () => {
    console.warn('pressed on ', user.name)
    navigation.navigate('ChatRoom', { id: chatRoom.id });
  }

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{uri: user.imageUri}} style={styles.image} /> 

      {chatRoom.newMessages && <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
      </View> }

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name} >{user.name}</Text>
          <Text style={styles.text} >{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
      </View>
    </Pressable>
  );
}

