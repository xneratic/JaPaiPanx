import React, { Component } from 'react';
import { View, Text, Image , StyleSheet, FlatList , ScrollView} from 'react-native';
import { Container , Content , Card , CardItem , Body} from 'native-base';

class PlaceDetail extends Component {

  static navigationOptions = ({navigate}) => ({
    title: <Text>{navigate}</Text>
  });
  checkSetpic(data){
     if(data.thumbnails.picset !== undefined){
        let picsets = data.thumbnails.picset;
        return <CardItem style={{backgroundColor: 'transparent'}}>
            <Card>
              <CardItem cardBody>
                <FlatList
                data={picsets}
                renderItem = {({item , index}) => 
                    <Image source={{uri: item.url}} style={{width: null ,height:200 , flex: 1 , backgroundColor: 'transparent'}} />
                }
                keyExtractor={(item, index) => item.id}
                >

              </FlatList>
              </CardItem>
            </Card>
        </CardItem>
     } 
     return <View></View>
  }
  render() {
    const navigate = this.props.navigation;
    const data = navigate.state.params.data;
    return (
         <ScrollView>
           <CardItem cardBody>
            <Image source={{uri: data.thumbnails.default.url}} style={{width: null ,height:200 , flex: 1}} />
           </CardItem>
           <CardItem style={{backgroundColor: 'transparent'}}> 
             <View style={styles.con1}>
             <Card>
               <CardItem>
               <View style={styles.con1}>
                <Text style={styles.titleplace}>{data.placename}</Text>
                <Text>{data.placedesc}</Text>
                </View>
               </CardItem>
             </Card>
             <Card>
               <CardItem>
               <Text style={{marginTop:10}}>{data.placefulldesc}</Text>
               </CardItem>
             </Card>
             </View>
           </CardItem>
           {this.checkSetpic(data)}
         </ScrollView>
    );
  }
}

export default PlaceDetail;

const styles = StyleSheet.create({
   con1: {
     flex:1,
     flexDirection: 'column',
   }, 
   titleplace: {
      fontWeight: 'bold',
   }
});