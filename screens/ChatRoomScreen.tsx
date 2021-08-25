import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { View } from '../components/Themed'; // take cares Dark Mode.
import Message from '../components/Message';
import chatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';

export default function ChatRoomScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  page: {
    // backgroundColor: 'white',
    flex: 1,
  }
})