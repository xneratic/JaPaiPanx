import React, { Component } from 'react';
import { View, Text, Animated , StyleSheet , FlatList , FlatListItem , RefreshControl , Platform, StatusBar} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import HomeScreen from './components/HomeTabs/HomeScreen';
import PlaceScreen from './components/PlaceTabs/PlaceScreen';
import DictionaryScreen from './components/DictionaryTabs/DictionaryScreen';

const NavigatorTab = TabNavigator ({
  HomeTabs: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" style={{color:tintColor}}/>
      ),
    }
  },
  PlaceListTab: {
    screen : PlaceScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-disc" style={{color:tintColor}}/>
      ),
    }
  },
  DictionaryListTab: {
    screen: DictionaryScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="paper" style={{color:tintColor}}/>
      ),
      title: "คำศัพท์น่ารู้"
    }
  }  
}, 
{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: "bottom",
  tabBarOptions: {
    style: {
      ...Platform.select({
          android: {
            backgroundColor: '#0083FF'
          },
          ios: {
            backgroundColor: '#0083FF',
            height:45
            
          }
      })
    },
    activeTintColor: 'white',
    inactiveTintColor: '#d1cece',
    indicatorStyle: {
      backgroundColor: 'transparent'
    },
    showLabel: false,
    showIcon: true
    }
});

class App extends Component {

  
  render() {
    // <PlaceList/>
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="black" barStyle="light-content"/>
        <NavigatorTab/>
      </View>
    );
  }
   
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
});

export default App;
