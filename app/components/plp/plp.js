import React, { Component } from 'react';
import { Text, ListView, Image, View, StyleSheet, TouchableHighlight, Button } from 'react-native';
import GridView from 'react-native-super-grid';

const styles = StyleSheet.create({
  ProductImage: {
  	marginBottom:15,
  	width: 120,
  	height: 120
  },
  GridBg: {
  	flex: 1,
    justifyContent: 'center',
  	alignItems:'center',
  	backgroundColor:'#cccccc',
  	flexDirection: 'column',
  	borderWidth: 0.5,
  	borderColor: '#000000',
  	padding: 20
  },
  ListBg: {
  	flex: 1,
  	flexDirection: 'row',
  	paddingTop: 15,
  	justifyContent: 'center',
  	alignItems: 'center',
  	margin: 5,
  	borderWidth: 0.5,
  	borderColor: '#000000',
  	backgroundColor: '#cccccc'
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

export default class Plp extends Component {
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
	      <TouchableHighlight 
	        onPress={() => {
	          navigation.navigate("Cart", {})
	        }}>
	        <Image source={require('./images/shoppingcart.png')} style={styles.shoppingcarticon} />
	      </TouchableHighlight>
	      <View style={{borderWidth: 0.3, borderColor: '#000000', width: 20, height: 20, borderRadius: 10, backgroundColor: '#cccccc'}}>
	        <Text style={{fontWeight: 'bold'}}>10</Text>
	      </View>
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
		  },
		  {
		    "id":"4",
		    "productname":"Blue Flower",
		    "productdescription":"Description of the blue flower",
		    "producturl":"http://png.bychuhe.com/wp-content/uploads/2014/07/red-tulips-png-image.jpg",
		    "price":"$25.00",
		    "strikeprice":"$30.00"
		  },
		  {
		    "id":"5",
		    "productname":"Green Flower",
		    "productdescription":"Description of the green flower",
		    "producturl":"http://png.bychuhe.com/wp-content/uploads/2014/07/red-tulips-png-image.jpg",
		    "price":"$25.00",
		    "strikeprice":"$30.00"
		  },
		  {
		    "id":"6",
		    "productname":"Blue Flower",
		    "productdescription":"Description of the blue flower",
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
	toggleListview(){
    	this.setState({
      		listview: !this.state.listview
    	});
  	}
	render() {
	    var {navigate} = this.props.navigation;
	    return (
	    	<View>
	    		<View style={styles.ListGrid}>
	    			<Text style={styles.Bold}>Items 1-12 of 15</Text>
	    			{!this.state.listview ? 
	    				<TouchableHighlight onPress={this.toggleListview.bind(this)}>
	    					<Image source={require('./images/listview.png')} style={styles.ListGridIcons} />
    					</TouchableHighlight> : 
    					<TouchableHighlight onPress={this.toggleListview.bind(this)}>
	    					<Image source={require('./images/gridview.png')} style={styles.ListGridIcons} />
	    				</TouchableHighlight>
	    			}	
	    		</View>
	    		{!this.state.listview ? 
	    			<GridView itemWidth={130} items={this.state.list} renderItem={item => (
						<TouchableHighlight onPress={() => navigate("Pdp", {productid:item.id})}> 
							<View style={styles.GridBg}>
								<Image source={{uri: item.producturl}} style={styles.ProductImage} />
								<Text style={styles.Bold}>{item.productname}</Text>
								<Text>{item.productdescription}</Text>
								<View style={styles.InlineText}>
									<Text style={styles.Bold}>{item.price} </Text>
									<Text style={styles.Strike}>{item.strikeprice}</Text>
								</View>
							</View>
						</TouchableHighlight> 
						)}
					/> : 
		    		<ListView dataSource={this.state.dataSource} renderRow={(item) => (
		    			<TouchableHighlight onPress={() => navigate("Pdp", {productid:item.id})}> 
			    			<View style={styles.ListBg}>
								<Image source={{uri: item.producturl}} style={styles.ProductImage} />
								<View style={styles.Listview}>
									<Text style={styles.Bold}>{item.productname}</Text>
									<Text>{item.productdescription}</Text>
									<View style={{flex: 1, flexDirection: 'row'}}>
										<Text style={styles.Bold}>{item.price} </Text>
										<Text style={styles.Strike}>{item.strikeprice}</Text>
									</View>
								</View>
							</View>
						</TouchableHighlight>
		    		)} />
		    	}
      		</View>
	    );
	}
}