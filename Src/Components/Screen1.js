import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Styles } from '../Styles';

class Screen1 extends Component {
  render() {
  return (
      <View style={{backgroundColor:"#fff", flex:1, justifyContent:'center'}}>
          <View style={{flexDirection:'column', alignItems:'center'}}>
              <TouchableOpacity style={Styles.buttonStyle} onPress={()=>{
                  this.props.navigation.navigate('Task1')
              }}>
                    <Text style={Styles.buttonText}>Task 1</Text>
              </TouchableOpacity>
              <View style={{padding:10}}/>
              <TouchableOpacity style={Styles.buttonStyle} onPress={()=>{
                  this.props.navigation.navigate('Task2')
              }}>
                    <Text style={Styles.buttonText}>Task 2</Text>
              </TouchableOpacity>
          </View>
      </View>
  )
}
}

export default Screen1;