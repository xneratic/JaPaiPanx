import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DictionaryList from './DictionaryList';
import DictionaryViewTab from './DictionaryView';
import BackButton from '../BackButton';
const DictionaryStack = StackNavigator ({
  DictionaryListTab:{
    screen: DictionaryList,
    navigationOptions: {
      title: 'แนะนำคำศัพท์',
      headerStyle: {
        backgroundColor: '#0083FF'
      },
      headerTitleStyle: {
         color:'white'
      }
    }
  },
  DictionaryViewTab: {
    screen: DictionaryViewTab,
    navigationOptions: ({navigation}) => ({
      headerLeft: <BackButton nav = {navigation}/>,
      title: `${navigation.state.params.title}`,
      headerStyle: {
          backgroundColor: '#0083FF'
      }, headerTitleStyle: {
          color:'white'
      }
    })
  }
});

export default DictionaryStack;
