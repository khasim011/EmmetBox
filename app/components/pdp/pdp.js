import React, { Component } from 'react';
import { Text, ListView, Image, View, StyleSheet, TouchableHighlight, Dimensions, TextInput, Button, ScrollView } from 'react-native';
import Carousel from 'react-native-banner-carousel';
import Accordion from 'react-native-collapsible/Accordion';

const BannerWidth = Dimensions.get('window').width-20;
const BannerHeight = 200;

const images = [
    "http://placeimg.com/640/480/any",
    "http://placeimg.com/640/480/any",
    "http://placeimg.com/640/480/any"
];

const styles = StyleSheet.create({
    productname: {
    	fontWeight: 'bold',
    	fontSize: 20
    },
    Strike: {
	  	textDecorationLine: 'line-through'
	},
	Bold: {
  		fontWeight: 'bold'
	},
	InlineText: {
	  	flex: 0,
	  	alignItems:'center',
	  	flexDirection: 'row'
    },
    AccordionStyle: {
    	backgroundColor: '#cccccc',
    	justifyContent: 'space-between',
    	height: 35,
    	marginTop: 10,
    	padding: 10
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

export default class Pdp extends Component {
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
	    this.state = {
	      txtQty: '1',
	      collapsed: true
	    };
	}
	componentDidMount() {
		
	}
	renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }
    _renderHeader(section) {
	    return (
	      	<View style={[styles.InlineText, styles.AccordionStyle]}>
	        	<Text style={{}}>{section.title}</Text>
	        	{this.state.collapsed ? 
		        	<Image source={require('./images/plus.png')} style={{}} /> 
		        	: 
		        	<Image source={require('./images/minus.png')} style={{}} />
		        }
	      	</View>
	    );
	}
  	_renderContent(section) {
    	return (
		    <View style={{padding: 10, borderWidth: 0.5, borderColor: '#cccccc'}}>
		        <Text>{section.content}</Text>
		    </View>
	    );
	}
	render() {
		var {params} = this.props.navigation.state;
	    return (
	    	<ScrollView style={{margin: 10}}>
	    		<Text style={styles.productname}>Cloudcore Men Product - 01</Text>
		    	<View style={{marginTop: 10,flex: 0.5, justifyContent: 'center'}}>	
		    		<Carousel
	                    autoplay={false}
	                    loop
	                    index={0}
	                    pageSize={BannerWidth}>
	                    {images.map((image, index) => this.renderPage(image, index))}
	                </Carousel>
	            </View>
	            <View>
            		<Text>IN STOCK</Text>
            	</View>
	            <View style={styles.InlineText}>
					<Text style={styles.Bold}>$25.00 </Text>
					<Text style={styles.Strike}>$30.00</Text>
				</View>
				<View>
					<Text>Color: </Text>
					<View style={styles.InlineText}>
						<View style={{marginRight: 10, borderWidth: 0.3, borderColor: '#000000', width: 30, height: 30, borderRadius: 15, backgroundColor: 'red'}}></View>
						<View style={{marginRight: 10, borderWidth: 0.3, borderColor: '#000000', width: 30, height: 30, borderRadius: 15, backgroundColor: 'green'}}></View>
						<View style={{marginRight: 10, borderWidth: 0.3, borderColor: '#000000', width: 30, height: 30, borderRadius: 15, backgroundColor: 'yellow'}}></View>
					</View>
				</View>
				<View>
					<Text>Size: </Text>
					<View style={styles.InlineText}>
						<View style={{marginRight: 10}}>
							<Text>XS</Text>
						</View>
						<View style={{marginRight: 10}}>
							<Text>S</Text>
						</View>
						<View style={{marginRight: 10}}>
							<Text>M</Text>
						</View>
					</View>
				</View>
				<View style={styles.InlineText}>
					<Text style={{marginRight: 10, fontWeight: 'bold'}}>Quantity</Text>
					<Button title="-" onPress={() => this.setState({txtQty: 0})} />
					<TextInput keyboardType = 'numeric' value={this.state.txtQty} style={{flex: 0, textAlign: 'center', marginRight: 10, marginLeft: 10, width: 50, height: 35, borderWidth: 0.3, borderColor: '#000000'}} />
					<Button title="+" onPress={() => this.setState({txtQty: 0})} />
				</View>
				<View style={{marginTop: 10}}>
					<Button title="ADD TO CART" onPress={() => {}} />
				</View>
				<View style={{marginTop: 10}}>
					<Button title="WISH LIST" onPress={() => {}} />
				</View>
				<View style={{marginTop: 10}}>
					<Button title="Share" onPress={() => {}} />
				</View>
				<Accordion collapsed={this.state.collapsed} onChange={(index) => this.setState({collapsed: !this.state.collapsed})} sections={[{title: 'DETAILS', content: 'Product descriptions...!'}]} renderHeader={this._renderHeader.bind(this)} renderContent={this._renderContent} />
      		</ScrollView>
	    );
	}
}