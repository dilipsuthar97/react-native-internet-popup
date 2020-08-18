import { Dimensions, Platform, StatusBar } from 'react-native';

const { height, width } = Dimensions.get('window');
const baselineHeight = height == 812 ? 800 : 680;

export const scale = (value: number) => Math.round((height / baselineHeight) * value);
