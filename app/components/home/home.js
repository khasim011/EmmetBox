import React, { Component } from 'react';
import { Text, Image, View, TouchableHighlight, StyleSheet, Dimensions, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  headertitle: {
    alignSelf: 'center'
  },
  logo: {
    width: 150,
    height: 110
  },
  shoppingcarticon: {
    width: 30,
    height: 30
  },
  container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "stretch"
    },
    cover: {
        flex: 1,
        width: null,
        height: null
    }
});

export default class Home extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
  	headerStyle: {
      backgroundColor: 'rgb(242, 244, 247)',
      paddingLeft: 10,
      paddingRight: 10
    },
    headerTitle: <View style={styles.headertitle}>
      <TouchableHighlight onPress={() => {}}>
        <Image source={require('./images/magento-logo.png')} style={styles.logo} />
      </TouchableHighlight>
    </View>,
    headerTitleStyle: { },
    headerTintColor: 'white',
    headerRight: <View style={{flex: 1, marginTop: 10, flexDirection: 'row'}}>
      <TouchableHighlight 
        onPress={() => {
          //navigation.navigate('DrawerOpen');
        }}>
        <Image source={require('./images/shoppingcart.png')} style={styles.shoppingcarticon} />
      </TouchableHighlight>
        <View style={{borderWidth: 0.3, borderColor: '#000000', width: 20, height: 20, borderRadius: 10, backgroundColor: '#cccccc'}}>
          <Text style={{fontWeight: 'bold'}}>10</Text>
        </View>
    </View>,
    headerLeft: <View>
      <TouchableHighlight 
        onPress={() => {
          if(navigation.state.index == 0){
            navigation.navigate('DrawerOpen');
          } else {
            navigation.navigate('DrawerClose');
          }
        }}>
        <Image source={require('./images/Menu.png')} />
      </TouchableHighlight>
    </View>
  })
  render() {
  	const dimensions = Dimensions.get('window');
	const bannerHeight = dimensions.height / 2.5;
	const bannerWidth = dimensions.width;
    return (
      <ScrollView>
        <Image resizeMode='contain' source={require("./images/banner1.jpg")} style={{ height: bannerHeight, width: bannerWidth, marginTop: -75 }} />
        <Image resizeMode='contain' source={require("./images/banner2.jpg")} style={{ height: bannerHeight, width: bannerWidth, marginTop: -110 }} />
        <Image resizeMode='contain' source={require("./images/banner3.jpg")} style={{ height: bannerHeight, width: bannerWidth, marginTop: -110 }} />
        <Image resizeMode='contain' source={require("./images/banner4.jpg")} style={{ height: bannerHeight, width: bannerWidth, marginTop: -128 }} />
        <Image resizeMode='contain' source={require("./images/banner5.jpg")} style={{ height: bannerHeight, width: bannerWidth, marginTop: -112, marginBottom: -58 }} />
      </ScrollView>
    );
  }
}