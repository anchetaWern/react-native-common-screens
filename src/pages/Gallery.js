import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';

export default class Gallery extends Component {

	constructor(props) {
		super(props);
		this.state = {
			photos: [
				{
					label: 'beach',
					src: require('../images/beach.jpg')
				},
				{
					label: 'bridge',
					src: require('../images/bridge.jpg')
				},
				{
					label: 'fields',
					src: require('../images/fields.jpg') 
				},
				{
					label: 'mountains',
					src: require('../images/mountains.jpg')
				},
				{
					label: 'sunflower',
					src: require('../images/sunflower.jpg')
				},
				{
					label: 'sunset',
					src: require('../images/sunset.jpg')
				},
				{
					label: 'lake',
					src: require('../images/lake.jpg')
				},
				{
					label: 'nature',
					src: require('../images/nature.jpg')
				},
				{
					label: 'pink',
					src: require('../images/pink.jpg')
				},
				{
					label: 'rails',
					src: require('../images/rails.jpg')
				},
			]
		};
	}

	press() {

	}

	getPairsArray(photos) {
		var pairs_r = [];
		var pairs = [];
		var count = 0;
		photos.forEach((item) => {
		  count += 1;
		  pairs.push(item);
		  if(count == 2){
		    pairs_r.push(pairs)
		    count = 0;
		    pairs = [];
		  }
		});
		return pairs_r;
	}

	renderGallery() {
		var count = 0;
		var previous_item = '';
		var pairs = this.getPairsArray(this.state.photos);
		return pairs.map((item, index) => {
			return (
				<View style={styles.item} key={index}>
					<Image 
						resizeMode={Image.resizeMode.cover} 
						style={styles.photo} 
						source={item[0].src} />
					<Image 
						resizeMode={Image.resizeMode.cover} 
						style={styles.photo} 
						source={item[1].src} />
				</View>
			);
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView style={styles.gallery}>
					{ this.renderGallery() }
				</ScrollView>
				<View style={styles.tabs}>
					<Button 
						noDefaultStyles={true}
						styles={{button: styles.tab}}  
						onPress={this.press.bind(this)}
					>
						<Icon style={styles.icon} name="shopping-cart" size={40} color="#FFF" />
					</Button>

					<Button 
						noDefaultStyles={true}
						styles={{button: styles.tab}}   
						onPress={this.press.bind(this)}
					>
						<Icon style={styles.icon} name="plus" size={40} color="#FFF" />
					</Button>
					
					<Button 
						noDefaultStyles={true}
						styles={{button: styles.tab}} 
						onPress={this.press.bind(this)}
					>
						<Icon style={styles.icon} name="camera" size={40} color="#FFF" />
					</Button>					
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	gallery: {
		flexDirection: 'column'
	},
	tabs: {
		flexDirection: 'row',
		backgroundColor: '#333',
		padding: 20
	},
	tab: {
		flex: 1
	},
	icon: {
		textAlign: 'center'
	},
	item: {
		flex: 1,
		flexDirection: 'row',
	},
	photo: {
		flex: 1
	}
});