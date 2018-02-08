import React, { Component } from 'react'
import { Text, View , FlatList, SectionList , ScrollView } from 'react-native'
import { Card , CardItem , Body , Right , Left , Icon } from 'native-base';
import BackButton from '../BackButton';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'
const HeaderWithBack = props => (
  <View style={{top: 1 , marginTop:1 , alignItems: 'flex-start', height:50,left:10}}>
     <Text style={{color: 'white' , fontWeight: 'bold', fontSize: 20,}}>{props.title}</Text>
     <BackButton nav = {props}/>
  </View>
);

export class DictionaryView extends Component {

  static navigationOptions = ({ navigation }) => {
    
  };

  render() {
    const navigate = this.props.navigation;
    const data = navigate.state.params.data;

    return (
        <ScrollView style={{flex:1 , flexDirection: 'column',}}>
          <FlatList 
              data = {data.wordlist}
              renderItem = {({item , index}) => 
               <CardItem style={{borderBottomColor: 'black', borderBottomWidth: 0.5,}}>
                  <Left>
                     <View style={{flex:1 , flexDirection: 'column',}}>
                        <Text>{item.jpn}</Text>
                        <Text>{item.romaji}</Text>
                        <Text>{item.thai_spell}</Text>
                     </View>
                  </Left>
                  <Right>
                    <Text>{item.mean}</Text>
                  </Right>
                </CardItem>
            }
            keyExtractor={(item, index) => item.id}
          />
                
        </ScrollView>
    )
  }
}

export default DictionaryView