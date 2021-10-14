import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
	container: {
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		backgroundColor: 'white',
		elevation: 8,
		padding: 8,
		borderRadius: 10,
		height: 'auto',
		alignContent: 'center',
		justifyContent: 'center',
		marginTop:20
		},
	img: {
		width: 50,
		height: 50,
		borderRadius: 50,
		borderColor: 'blue',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 0,
		marginTop:0
	}
});

function Card(props) {
	return (
		<View style={styles.container}>
			<View style={{ width: '100%' }}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<View style={{ marginTop: 10, flexDirection: 'row' }}>
						<View style={styles.img}>
							<Text>image</Text>
						</View>
						<View style={{flexDirection:"column"}}>
							<Text style={{ fontSize: 20, marginLeft: 8 }}>{props.name}</Text>
							<Text style={{ color: 'green', marginLeft: 8, marginTop: 6 }}>{props.username}</Text>
						</View>
					</View>
					<View style={{ marginRight: 8, marginTop: 10 }}>
						<View>
							<Text style={{ fontSize: 20 }}>{props.website}</Text>
							<Text style={{ color: 'gray' }}>200gr</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

export default Card;
