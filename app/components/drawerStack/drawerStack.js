import { StackNavigator } from 'react-navigation';
import { TouchableHighlight, Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';
import DrawerScreen from './drawerScreen';

const DrawerNavigation = StackNavigator({
  DrawerStack: {screen: DrawerScreen,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: 'rgb(242, 244, 247)',
        paddingLeft: 10,
        paddingRight: 10
      },
      headerTitle: <View style={styles.headertitle}>
        <TouchableHighlight onPress={() => {navigation.navigate('Home');}}>
          <Image source={require('./images/magento-logo.png')} style={styles.logo} />
        </TouchableHighlight>
      </View>,
      headerTitleStyle: { },
      headerTintColor: 'black',
      headerRight: <View style={{flex: 1, marginTop: 10, flexDirection: 'row'}}>
        <TouchableHighlight 
          onPress={() => {
            navigation.navigate("Cart", {})
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
          <Image source={require('./images/Menu.png')} style={{width: 35, height: 35}} />
        </TouchableHighlight>
      </View>
    })
  }
}, {
  headerMode: 'none'
})

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
  }
});

export default DrawerNavigation;