import React, { Component } from 'react';
import { View, Text,  TouchableOpacity  } from 'react-native';
import { Icon } from 'native-base';
class BackButton extends Component {

  _handleDrawer = () => {
     this.props.nav.goBack();
  }
  render() {
    return (
      <TouchableOpacity onPress={this._handleDrawer}>
        <View style={{margin:10}}>
        <Icon name="ios-arrow-dropleft-circle-outline" size={30} style={{color: 'white'}} />
          {/* <Text>ย้อนกลับ</Text> */}
        </View>
      </TouchableOpacity>
    );
  }
}

export default BackButton;
