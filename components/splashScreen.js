import React, { Component } from 'react';
import { View, Text, StyleSheet , Button , Image  , NetInfo} from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'


class SplashScreen extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      isConnected: false
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image
        // style={{width: 50, height: 50}}
        source={require('../assets/logo.png')}
      />     
      <Text style={{fontWeight: 'bold', fontSize: 30}}>JaPaiPan</Text>
      {/* <Text>BIS-407</Text> */}
      <Text>Innovation and New Technology</Text>
      <View style={{position: 'absolute' , bottom:0 , marginBottom: 10 , alignItems: 'center',}}>
        {/* <Image source={require('../assets/tni_logo.jpeg')} style={{height:60 , width: 60}}/> */}
        {/* <Text style={{marginTop:4}}>Thai-Nichi Institute of Technology</Text> */}
      </View>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#A6207E'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
});

export default SplashScreen;
