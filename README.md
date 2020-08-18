<h1 align="center">
<b>react-native-internet-popup</b>

A Internet Popup library. It display a beatiful bar at bottom of screen when you are offline and back to online.

Support us with a star 🌟

<p align="center">
  <a href="https://github.com/dilipsuthar97/react-native-internet-popup/releases"><img src="https://img.shields.io/github/v/release/dilipsuthar97/react-native-internet-popup?include_prereleases" /></a>
  <a href="https://www.npmjs.com/package/react-native-internet-popup"><img src="https://img.shields.io/npm/v/react-native-internet-popup" /></a>
  <a href="https://github.com/dilipsuthar97/react-native-internet-popup#License"><img src="https://img.shields.io/github/license/dilipsuthar97/react-native-internet-popup" /></a>
  <a href=""><img src="https://img.shields.io/badge/status-online-brightgreen.svg" /></a>
</p>
</h1>

<!-- ## 📸 Preview

![gif](https://github.com/dilipsuthar97/react-native-internet-popup/blob/master/ss/success.gif)
![gif](https://github.com/dilipsuthar97/react-native-internet-popup/blob/master/ss/warning.gif)
![gif](https://github.com/dilipsuthar97/react-native-internet-popup/blob/master/ss/error.gif)
![gif](https://github.com/dilipsuthar97/react-native-internet-popup/blob/master/ss/info.gif)
![gif](https://github.com/dilipsuthar97/react-native-internet-popup/blob/master/ss/default.gif)
![gif](https://github.com/dilipsuthar97/react-native-internet-popup/blob/master/ss/confusion.gif) -->

## 📖 Getting started

`$ npm install react-native-internet-popup --save`

`$ yarn add react-native-internet-popup`

### Linking (Mostly automatic installation)

#### ReactNative < 0.60

`$ react-native link react-native-internet-popup`

## 💻 Usage

```javascript
import InternetPopup from 'react-native-internet-popup';
```

In your `AppNavigation.js` or `App.js` file

```javascript
class AppNavigation extends React.Component {
	state = {
		unsubscribe: null,
	};

	// --------------- LIFECYCLE ---------------
	componentDidMount() {
		console.disableYellowBox = true;
	}

	componentWillUnmount() {
		if (this.state.unsubscribe) {
			this.state.unsubscribe();
		}
	}

	// --------------- RENDER ---------------
	render() {
		return (
			<SafeAreaProvider>
				<NavigationContainer ref={navigationRef}>
					<Stack.Navigator initialRouteName='SplashScreen' screenOptions={screenOptions}>
						<Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
						<Stack.Screen name='AuthModule' component={AuthStack} options={{ headerShown: false }} />
						<Stack.Screen name='HomeModule' component={TabNavigator} options={{ headerShown: false }} />
					</Stack.Navigator>
				</NavigationContainer>
				<InternetPopup
					removeEventListener={(unsubscribe) => {
						this.setState({ unsubscribe });
					}}
					onNetworkChange={(isConnected) => console.log(isConnected)}
					isConnected={this.props.Common.isNetworkAvailable} // Value is comming from Redux connection
				/>
			</SafeAreaProvider>
		);
	}
}
```

## 💡 Props

| Key                 | Type                  | Description                                                                                            |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------ |
| removeEventListener | (unsubscribe) => void | Give `unsubscribe` function to remove netInfo event listener. call it in `componentWillUnmount` method |
| onNetworkChange     | (isConnected) => void | Give `isConnected` boolean value whether internet is connected or not                                  |
| isConnected         | boolean               | You can pass your own internet connection boolean value                                                |

-  All above **props** are not required.

## 💫 Where is this library used?

If you are using this library in one of your projects, add it in this list below. ✨

## 💪 Support Development

There are few ways you can do it:

-  Starring and sharing the projects you like 🚀
-  Please follow [dilipsuthar97](https://github.com/dilipsuthar97) on GitHub.

<a href="https://www.buymeacoffee.com/dilipsuthar97" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee ☕" style="height: auto !important;width: auto !important;" ></a>

Thanks! ❤️
<br/>
[dilipsuthar97.github.io](https://dilipsuthar97.github.io)
<br/>

## 📱 Social

[![Twitter](https://img.shields.io/twitter/follow/dilipsuthar97?label=Follow&style=social)](https://twitter.com/dilipsuthar97)
![GitHub](https://img.shields.io/github/followers/dilipsuthar97?label=Follow&style=social)

## 📜 License

```
Copyright 2020 Dilip Suthar (dilipsuthar97)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
