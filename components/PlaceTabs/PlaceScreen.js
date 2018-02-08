import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet , StatusBar  } from 'react-native';
import { Header } from 'native-base';
import PlaceList from './PlaceList';
import PlaceDetail from './PlaceDetail';
import BackButton from '../BackButton';
import { TabNavigator, StackNavigator } from 'react-navigation';

const HeaderX = props => (
    <View style={{position: 'absolute' , top: 1 , marginTop:30 , flex: 1 , alignItems: 'center',left:0 , right:0}}>
       <Text style={{color: 'white' , fontWeight: 'bold', fontSize: 20,}}>{props.title}</Text>
       
    </View>
);

const HeaderWithBack = props => (
    <View style={{position: 'absolute' , top: 1 , marginTop:1 , alignItems: 'flex-start', height:100,left:10}}>
       <Text style={{color: 'white' , fontWeight: 'bold', fontSize: 20,}}>{props.title}</Text>
       <BackButton nav = {props}/>
    </View>
);

const PlaceStack = StackNavigator ({
    PlaceListTab:{
      screen: PlaceList,
      // headerTintColor: 'blue',
      navigationOptions: {
          header: (props) => <HeaderX {...props}/>,
          // headerLeft: <
      }
    },
    PlaceDetailTab: {
        screen: PlaceDetail,
        navigationOptions: ({navigation}) => ({
           header: (props) => <HeaderWithBack {...navigation}/>
        })
    }
},{
  headerMode: 'screen'
});

const styles = StyleSheet.create({
  header1: {
    position: 'absolute',
    flex: 1
  }
});

export default PlaceStack;

