import React, { Component } from 'react';
import { View, Text,  StyleSheet , FlatList  , TouchableOpacity , RefreshControl} from 'react-native';
import { getWordFromServer } from '../network/server';

import { Container , Content , ListItem , Card , CardItem , Left , Right , Body , Icon } from 'native-base';

class DictionaryList extends Component {

  constructor(props) {
    super(props);
    this.state = {
       wordFormServer: [],
       refreshing: false
    }
  }


  componentDidMount() {
    this.refreshDataFromServer();
   }

   refreshDataFromServer = () => {
      this.setState({ refreshing: true })
      getWordFromServer().then((word)=> {
        this.setState({wordFormServer: word});
        this.setState({refreshing: false})
        // alert(JSON.stringify(this.state.placeFromServer));
      }).catch((error) => {
        this.setState({wordFormServer: []});
        this.setState({refreshing: false})
      });
   }

   onRefresh = () => {
      this.refreshDataFromServer();
   }


  render() {
    let wordData = this.state.wordFormServer;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <FlatList
              data={this.state.wordFormServer.wordtopic}
              renderItem={({item , index}) => 
                  <TouchableOpacity
                  onPress={() => navigate('DictionaryViewTab', { title: item.word_mode_thai , data: item})}
                >
                  <CardItem style={{borderBottomColor: 'black', borderBottomWidth: 0.5,}}>
                    <Left>
                      <View style={{flex:1 , flexDirection: 'column',}}>
                        <Text style={styles.engWord}>{item.word_mode}</Text>
                        <Text style={styles.thaiWord}>{item.word_mode_thai}</Text>
                      </View>
                    </Left>
                    <Right>
                       <Icon name="arrow-forward" size={40}/>
                    </Right>
                  </CardItem>
                </TouchableOpacity>
              }
              refreshControl = {
                 <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh}
                 />
              }
              keyExtractor={(item, index) => item.word_mode}
          />
        </View> 
    )
  }
}

export default DictionaryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  engWord: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  thaiWord: {
    fontSize:16
  }
});
