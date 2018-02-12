
import React, { Component } from 'react'
import { Text, View , StyleSheet , Image , ScrollView , FlatList} from 'react-native'
import { Card , CardItem , Left , Right , Body , Icon , Button} from 'native-base';
import { Weather }  from './Weather';
export class HomeScreen extends Component {

  static navigationOptions = ()=> ({
    title: 'ข้อมูลสถานที่',
    navigationOptions: {
       header: null
   }
 });

 showWeather = (longlat,city,display) =>{
    return <Weather longandlat={longlat} citydisplay={city} 
      displaybg={display}
    />
  }

 render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.containerTop}>Home</Text>
        <FlatList
          data={[
            {
              latlong: "35.652832,139.839478",
              city: "Tokyo",
              img: <Image source={require('../../assets/tokyo-tower.jpg')} style={{width:undefined , height: 200}}/>
            }
          ]}
          renderItem={({item , index}) => 
            <View>
              {this.showWeather(item.latlong,item.city,item.img)}
            </View>
          }
          keyExtractor={(item, index) => item.city}
          />
        {/* {this.showWeather("35.652832,139.839478","Tokyo",<Image source={require('../../assets/tokyo-tower.jpg')} style={{width:undefined , height: 200}}/>)}
        {this.showWeather("26.281574,127.778633","Ginowan, Okinawa",<Image source={require('../../assets/ginowan-tower.jpg')} style={{width:undefined , height: 200}}/>)}
        {this.showWeather("35.817616,139.677887","Toda, Saitama",<Image source={require('../../assets/toda-tower.jpg')} style={{width:undefined , height: 200}}/>)}
        {this.showWeather("35.694706, 139.982620","Funabashi,Chiba",<Image source={require('../../assets/funabashi-tower.jpg')} style={{width:undefined , height: 200}}/>)}
        {this.showWeather("34.495380, 136.706146","Ise,Mie",<Image source={require('../../assets/ise-tower.jpg')} style={{width:undefined , height: 200}}/>)}
        {this.showWeather("36.255486, 138.266418","Nagawa, Nagano",<Image source={require('../../assets/nagawa-tower.jpg')} style={{width:undefined , height: 200}}/>)}
        {this.showWeather("38.293839, 141.004227","Tagajo, Miyagi",<Image source={require('../../assets/tagajo-tower.png')} style={{width:undefined , height: 200}}/>)}
        <View style={{bottom: 0 , position: 'absolute'}}> */}
        {/* </View> */}
      </ScrollView>
    )
  }
};


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#0083FF',
  },
  containerTop: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color:'white'
  }
});

export default HomeScreen

