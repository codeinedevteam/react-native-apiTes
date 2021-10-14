import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import CardItem from './src/components/Card';

export default function App() {
	const [ data, setData ] = useState([]);
	const getData = async () => {
		axios
			.get(`https://jsonplaceholder.typicode.com/users`)
			.then((response) => {
				const item = response.data;
				setData(item);
			})
			.catch((err) => console.log(err));
	};

	useEffect(
		() => {
			getData();
		},
		[ 0 ]
	);

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.view}>
					{data.map((item, key) => (
						<CardItem name={item.name} username={item.username} website={item.id} key={Math.random()} />
					))}
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		width: '100%'
	},
	view:{
		padding:10,
		marginTop:30
	},
	card: {}
});
