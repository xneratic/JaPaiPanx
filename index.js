import { AppRegistry } from 'react-native';
import React, { Component } from 'react'
import App from './App';
import SplashScreen from './components/splashScreen';


class Main extends Component {
  constructor(props){
    super(props);
    this.state = { 
      currentScreen: 'Splash' 
    }
    setTimeout(() => {
      this.setState({ currentScreen: 'App'})
    }, 3000);
  }

  render(){
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === 'Splash' ? <SplashScreen/> : <App/>
    return mainScreen;
 }
}


AppRegistry.registerComponent('JaPaiPanX', () => App);
