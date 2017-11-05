import { DrawerNavigator, NavigationActions } from 'react-navigation';
import React from 'react';
import { Image, ScrollView, Button } from 'react-native';
import Home from '../home/home';

const DrawerScreen = DrawerNavigator({
  Home: {screen: Home}
}, {
  headerMode: 'none',
  contentComponent: ({ navigation, router, getLabel, renderIcon }) => {
	return (
		<ScrollView><Button title="PLP" onPress={() => {navigation.navigate("Plp")}} /></ScrollView>
	)}
})

export default DrawerScreen;