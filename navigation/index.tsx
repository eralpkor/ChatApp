/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Text, View, Image, useWindowDimensions } from 'react-native';
import { EvilIcons, Feather } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerTitle: HomeHeader }} 
      />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={{ headerTitle: ChatRoomHeader, headerBackTitleVisible: false }} 
      />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}


const HomeHeader = (props) => {
  const { width } = useWindowDimensions();
console.log(props.children);
  return (
    <View 
      style= {{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Image source={{uri: "https://avatars.githubusercontent.com/u/13582770?v=4"}}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{ flex: 1, textAlign: 'center', marginLeft: 40, fontWeight: 'bold' }}>Post Route</Text>
        <EvilIcons name="camera" size={24} color="black" style={{ marginHorizontal: 10}} />
        <Feather name="edit-2" size={24} color="black" style={{ marginHorizontal: 10}} />
    </View>
  )
}

const ChatRoomHeader = (props) => {
  const { width } = useWindowDimensions();

  return (
    <View 
      style= {{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 25,
        marginLeft: 25,
        padding: 10,
        alignItems: 'center',
      }}
    >
      <Image source={{uri: "https://avatars.githubusercontent.com/u/13582770?v=4"}}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{ flex: 1, marginLeft: 10, fontWeight: 'bold' }}>{props.children}</Text>
        <EvilIcons name="camera" size={24} color="black" style={{ marginHorizontal: 10}} />
        <Feather name="edit-2" size={24} color="black" style={{ marginHorizontal: 10}} />
    </View>
  )
}