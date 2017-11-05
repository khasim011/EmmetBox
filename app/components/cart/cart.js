import React, { Component } from 'react';
import { Text, ListView, Image, View, StyleSheet, TouchableHighlight, Button, TextInput, ScrollView } from 'react-native';
import GridView from 'react-native-super-grid';

const styles = StyleSheet.create({
  ProductImage: {
  	marginBottom: 15,
  	marginLeft: 15,
  	width: 80,
  	height: 80,
  	borderWidth: 0.5,
  	borderColor: 'black'
  },
  ListBg: {
  	flex: 1,
  	flexDirection: 'row',
  	paddingTop: 15,
  	justifyContent: 'center',
  	alignItems: 'center',
  	margin: 5,
  	borderTopWidth: 1,
  	borderColor: '#000000'
  },
  Listview: {
  	paddingLeft: 13,
  	flex: 1,
  	flexDirection: 'column'
  },
  ListGrid: {
  	padding: 10,
  	flex: 0,
  	flexDirection: 'row',
  	justifyContent: 'space-between'
  },
  ListGridIcons: {
  	width:30,
  	height:30
  },
  InlineText: {
  	flex: 1,
    justifyContent: 'center',
  	alignItems:'center',
  	flexDirection: 'row',
  },
  Strike: {
  	textDecorationLine: 'line-through'
  },
  Bold: {
  	fontWeight: 'bold'
  },
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

export default class Cart extends Component {
	static navigationOptions = {
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
	      
	    </View>
	}
	constructor(props) {
	    super(props);
	    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      listview: true,
	      list: [],
	      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
	    };
	}
	componentDidMount() {
		const list = [
		  {
		    "id":"1",
		    "productname":"Red Flower",
		    "productdescription":"Description of the red flower",
		    "producturl":"http://png.bychuhe.com/wp-content/uploads/2014/07/red-tulips-png-image.jpg",
		    "price":"$25.00",
		    "strikeprice":"$30.00"
		  },
		  {
		    "id":"2",
		    "productname":"Yellow Flower",
		    "productdescription":"Description of the yellow flower",
		    "producturl":"http://png.bychuhe.com/wp-content/uploads/2014/07/red-tulips-png-image.jpg",
		    "price":"$25.00",
		    "strikeprice":"$30.00"
		  },
		  {
		    "id":"3",
		    "productname":"Green Flower",
		    "productdescription":"Description of the green flower",
		    "producturl":"http://png.bychuhe.com/wp-content/uploads/2014/07/red-tulips-png-image.jpg",
		    "price":"$25.00",
		    "strikeprice":"$30.00"
		  }
		];
		this.setState({
			list: list,
      		dataSource: this.state.dataSource.cloneWithRows(list)
    	});
	}
	render() {
	    var {navigate} = this.props.navigation;
	    return (
	    	<ScrollView>
	    		<View style={styles.ListGrid}>
	    			<Text style={{fontWeight: 'bold', fontSize: 20.00}}>Shopping Cart</Text>
    			</View>
	    		<View style={styles.ListGrid}>
	    			<Text style={styles.Bold}>3 Items In Cart</Text>
	    			<Text>Total: $164.99</Text>
	    		</View>
	    		<View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
	    			<Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}} onPress={() => navigate("Home", {})}>
					  Continue Shopping
					</Text>
	    		</View>
	    		<View style={{flex: 0, margin: 5}}>
	    			<Button title="Proceed To Checkout" onPress={() => {}} />
	    		</View>
	    		<ListView dataSource={this.state.dataSource} renderRow={(item) => (
	    			<View style={{}}>
		    			<View style={styles.ListBg}>
			    			<TouchableHighlight onPress={() => navigate("Pdp", {productid:item.id})}> 
								<Image source={{uri: item.producturl}} style={styles.ProductImage} />
							</TouchableHighlight>
							<View style={styles.Listview}>
								<Text style={styles.Bold}>{item.productname}</Text>
								<Text>Color: Red</Text>
								<Text>Size: L</Text>
								<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
									<Text>Qty </Text>
									<TextInput value='1' />
									<Text style={styles.Bold}>{item.price} </Text>
								</View>
							</View>
						</View>
						<View style={{flex: 1, flexDirection: 'row', marginLeft: 20}}>
			    			<Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}} onPress={() => navigate("Home", {})}>
							  Edit
							</Text>
							<Text> | </Text>
							<Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}} onPress={() => navigate("Home", {})}>
							  Delete
							</Text>
			    		</View>
		    		</View>
	    		)} />
	    		<View style={{borderColor: 'black', borderTopWidth: 1, margin: 5}}>
	    			<View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 50, marginRight: 50}}>
		    			<Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}} onPress={() => navigate("Home", {})}>
						  Update Shopping Cart
						</Text>
						<Text style={{fontWeight: 'bold', textDecorationLine: 'underline'}} onPress={() => navigate("Home", {})}>
						  Clear Cart
						</Text>
		    		</View>
	    		</View>
	    		<View style={{flex:1, flexDirection: 'row', margin: 5}}>
	    			<TextInput placeholder='Enter Promo Code' style={{flex:1, height: 38}} />
	    			<Button title="Apply" onPress={() => {}} style={{flex:1}} />
	    		</View>
	    		<View style={{backgroundColor: '#cccccc', margin: 5, padding: 5}}>
	    			<Text style={{fontWeight: 'bold', fontSize: 18.00, marginTop: 10}}>Summary</Text>
	    			<View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
	    				<Text>Subtotal</Text>
	    				<Text>$164.99</Text>
	    			</View>
	    			<View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
	    				<Text>Tax</Text>
	    				<Text>$1.99</Text>
	    			</View>
	    			<View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
	    				<Text style={{fontWeight: 'bold'}}>Total</Text>
	    				<Text style={{fontWeight: 'bold'}}>$165.98</Text>
	    			</View>
	    		</View>
	    		<View style={{flex: 0, margin: 5}}>
	    			<Button title="Proceed To Checkout" onPress={() => {}} />
	    		</View>
      		</ScrollView>
	    );
	}
}