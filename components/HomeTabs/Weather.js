import React, { Component } from 'react'
import { Text, View , StyleSheet , Image , ActivityIndicator} from 'react-native'
import { Card , CardItem , Left , Right , Body , Icon , Button} from 'native-base';
import { getWeatherFromServer } from '../network/server';


export class Weather extends Component {
  å
  constructor(props) {
    super(props);
      this.state = {
        weatherFromServer: [],
        refreshing: false,
        isLoading: true
      }
    }
  
  
   componentDidMount() {
    this.refreshDataFromServer();
   }
  
   refreshDataFromServer = () => {
      this.setState({ refreshing: true });
      getWeatherFromServer(this.props.longandlat).then((places)=> {
        this.setState({weatherFromServer: places});
        this.setState({refreshing: false});
        this.setState({isLoading: false});
      }).catch((error) => {
        this.setState({weatherFromServer: []});
        this.setState({refreshing: false});
        this.setState({isLoading: false});
      });
   }
  
    onRefresh = () => {
        this.refreshDataFromServer();
    }
  
    timeConvert(timestamp){
      let date = new Date(timestamp*1000);
      // Hours part from the timestamp
      let hours = date.getHours();
      // Minutes part from the timestamp
      let minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      let seconds = "0" + date.getSeconds();
      // Will display time in 10:30:23 format
      let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      return formattedTime;
    }

    render () {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }

      let celcius = (this.state.weatherFromServer.currently.temperature - 32) / 1.8;
      return(
          <View style={{}}>
           {/* <Image source={require('../../assets/weather.jpg')} style={{width:undefined , height: 200}}/> */}
           {this.props.displaybg}
          <View style={{flex: 1, flexDirection: 'row' , position: 'absolute' , bottom: 0 , width:'100%' ,
            backgroundColor: 'rgba(255,255,255,0.8)', height:50
          }}>
              <View style={{flex:1 , flexDirection: 'column', marginLeft:5}}>
                <View style={{flex:1 , flexDirection: 'row'}}>
                  <Icon name="ios-cloudy-night-outline" style={{color:'black'}}/>
                  <Text style={{color:'black' , fontSize: 20 , marginTop:4 , marginLeft: 10 , fontWeight: 'bold',}}>
                    {celcius.toFixed(0)}&#8451;
                  </Text>
                </View>
                <Text style={{color:'black' , fontSize: 14 }}>
                  อัพเดทเมื่อ {this.timeConvert(this.state.weatherFromServer.currently.time)}
                </Text>
              </View>
              <Text style={{position: 'absolute', marginTop: 10 , right: 5 , color: 'black' , fontSize: 20}}>
                  {this.props.citydisplay}
              </Text>
          </View> 
        </View>
      );
    }
}
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
