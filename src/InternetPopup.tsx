// --------------- LIBRARIES ---------------
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, LayoutAnimation, Platform, UIManager } from 'react-native';
import NetInfo, { NetInfoSubscription } from '@react-native-community/netinfo';
import SafeAreaView from 'react-native-safe-area-view';

// --------------- LIBRARIES ---------------
import { scale } from './helpers/Functions';

if (Platform.OS === 'android') {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
}

// --------------- PROPS ---------------
interface Props {
	onNetworkChange?: (isConnected: boolean) => void;
	removeEventListener?: (unsubscribe: NetInfoSubscription) => void;
	isConnected?: boolean;
}

// --------------- COMPONENT DECLARATION ---------------
const InternetPopup: React.FC<Props> = ({ onNetworkChange, removeEventListener, isConnected }) => {
	const [text, setText] = useState<string>('');
	const [height, setHeight] = useState<number>(0);
	const [backgroundColor, setBackgroundColor] = useState<string>('#343434');

	// Ref for previous isConnected value
	const prevIsConnectedRef = useRef<boolean>();

	if (isConnected == null || isConnected == undefined) {
		console.log('Not found');
		const [isConnected, setIsConnected] = useState<boolean>(true);

		// ComponentDidMount
		useEffect(() => {
			prevIsConnectedRef.current = isConnected;
			const unsubscribe: NetInfoSubscription = NetInfo.addEventListener((state) => {
				console.log('Connection type', state.type);
				console.log('Is connected?', state.isConnected);
				setIsConnected(state.isConnected);
			});
			removeEventListener && removeEventListener(unsubscribe);
		}, []);

		updateViews(isConnected);
	} else {
		console.log('found');

		// ComponentDidMount
		useEffect(() => {
			prevIsConnectedRef.current = isConnected;
		}, []);

		updateViews(isConnected);
	}

	function updateViews(isConnected: boolean) {
		// ComponentDidUpdate
		useEffect(() => {
			onNetworkChange && onNetworkChange(isConnected);
			if (isConnected == true) {
				if (prevIsConnectedRef.current == false) {
					LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
					setText('Back online');
					setHeight(25);
					setBackgroundColor('#00C853');
				}
				setTimeout(() => {
					LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
					setHeight(0);
					setText('');
				}, 2000);
			} else if (isConnected == false) {
				LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
				setText('No connection');
				setHeight(25);
				setBackgroundColor('#343434');
			}

			prevIsConnectedRef.current = isConnected;
		}, [isConnected]);
	}

	return (
		<SafeAreaView style={{ position: 'absolute', bottom: 0 }}>
			<View style={[styles.container, { height: scale(height), backgroundColor }]}>
				<Text style={styles.text}>{text}</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: scale(25),
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#343434',
		zIndex: 2,
		elevation: scale(4),
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: scale(13),
		color: '#FFF',
	},
});

export default InternetPopup;
