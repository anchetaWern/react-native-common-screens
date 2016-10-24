import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Button from '../components/Button';
import NewsItem from '../components/NewsItem';

export default class News extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			news_items: [
				{
					pretext: 'Gray Matter',
					title: 'Art Makes You Smart',
					summary: 'Museum visits increase test scores, generate social responsibility and increase appreciation of the arts by students.',
					image: require('../images/pink.jpg'),
				},
				{
					pretext: '',
					title: 'Tension and Flaws Before Health Website Crash',
					summary: 'Interviews and documents offer new details into how the rollout of President Obama\'s signature program turned into a major humiliation.',
					image: require('../images/beach.jpg')
				},
				{
					pretext: '',
					title: '36 Hours in Charleston, S.C.',
					summary: 'Crowds are thinner and temperatures are mild during winter in this..',
					image: require('../images/rails.jpg')
				},
				
			]
		};
	}

	press() {

	}

	renderNews() {
	
		return this.state.news_items.map((news, index) => {
			
			return <NewsItem key={index} index={index} news={news} />
		});
	}


	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Button
						noDefaultStyles={true}
                    	styles={{button: styles.header_button}} 
                    	onPress={this.press.bind(this)}
					>
						<View style={styles.back_button}>
							<Icon name="chevron-left" size={20} color="#397CA9" />
	                    	<Text style={[styles.back_button_label]}> Sections</Text>
						</View>
					</Button>
					
	                <View style={styles.header_text}>
						<Text style={styles.header_text_label}>Most E-Mailed</Text>
	                </View>
	                <View style={styles.whitespace}></View>
				</View>

				<View style={styles.instruction}>
					<Text style={styles.instruction_text}>SWIPE ACROSS SECTIONS</Text>
				</View>
				
				<ScrollView style={styles.news_container}>
				{ this.renderNews() }
				</ScrollView>
						
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		flexDirection: 'row',
		backgroundColor: '#FFF',
		padding: 20,
		justifyContent: 'space-between',
		borderBottomColor: '#E1E1E1',
		borderBottomWidth: 1
	},
	header_button: {
		flex: 1,
	},
	whitespace: {
		flex: 1
	},
	back_button: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	back_button_label: {
		color: '#397CA9',
		fontSize: 20,
	},
	instruction: {
		alignSelf: 'center',
		marginTop: 5
	},
	instruction_text: {
		color: '#A3A3A3'
	},
	header_text: {
		flex: 1,
		alignSelf: 'center'
	},
	header_text_label: {
		fontSize: 20,
		textAlign: 'center'
	},
	news_container: {
		flex: 1,
		flexDirection: 'column'
	},
});