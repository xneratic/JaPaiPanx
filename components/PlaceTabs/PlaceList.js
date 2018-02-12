import React, { Component } from 'react';
import { View, Text, Animated , StyleSheet , FlatList , FlatListItem , RefreshControl , Image , TouchableOpacity} from 'react-native';
import { Content , Card , CardItem , Body , Left , Right , Icon } from 'native-base';
import { getPlaceFromServer } from '../network/server';

class PlaceList extends Component {

   
  static navigationOptions = ()=> ({
     title: 'ข้อมูลสถานที่',
     navigationOptions: {
        // headerStyle: {
        //    backgroundColor: 'white'
        // }
    }
  })

  constructor(props) {
    super(props);
    this.state = {
       placeFromServer: [],
       refreshing: false
    }
  }


  componentDidMount() {
    this.refreshDataFromServer();
   }

   refreshDataFromServer = () => {
      this.setState({ refreshing: true })
      getPlaceFromServer().then((places)=> {
        this.setState({placeFromServer: places});
        this.setState({refreshing: false})
        // alert(JSON.stringify(this.state.placeFromServer));
      }).catch((error) => {
        this.setState({placeFromServer: []});
        this.setState({refreshing: false})
      });
   }

   onRefresh = () => {
      this.refreshDataFromServer();
   }

   render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <FlatList
              data={this.state.placeFromServer}
              renderItem={({item , index}) => 
                  <TouchableOpacity
                  onPress={() => navigate('PlaceDetailTab', { data: item})}
                >
                  <Image source={{uri: item.thumbnails.default.url}} style={{width:undefined , height:200 , flex: 1}}/>
                  <View style={styles.overlayOne}>
                  <Text style={{color: 'black' , fontWeight: 'bold' , fontSize: 20}}>{item.placename}</Text>
                  </View>
                </TouchableOpacity>
              }
              refreshControl = {
                 <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh}
                 />
              }
              keyExtractor={(item, index) => item.id}
          />
            
          
      </View>
    );
  }
}

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
  overlayOne: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    flex: 1 , 
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    // backgroundColor: 'white',
    width: '100%'
  }
});

export default PlaceList;
