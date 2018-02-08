
import React, { Component } from 'react'
import { Text, View , Button , StyleSheet} from 'react-native'

export class HomeScreen extends Component {

  static navigationOptions = ()=> ({
    title: 'ข้อมูลสถานที่',
    navigationOptions: {
       header: null
   }
 })

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerTop}>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    // backgroundColor: '#3e3e',
  },
  containerTop: {
    alignSelf: 'center',
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default HomeScreen

