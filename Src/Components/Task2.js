import React, {Component} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text
} from 'react-native';
import {Header} from 'react-native-paper';
import { Styles , windowHeight} from '../Styles';

class Task2 extends Component {
  render() {
  return (
      <View style={{backgroundColor:"#fff", flex:1}}>
         <View style={{height:windowHeight/3, backgroundColor:'#F76951'}}>  
         <View style={{flexDirection:'row', padding:10}}>
                <Image source={require('../Assets/back.png')} onPress={()=>this.props.navigation.navigate('Screen1')} />
                <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
                <Text style={{color:'#fff'}}>My Profile</Text>
                </View>
            </View>
        <ImageBackground source ={require('../Assets/Rectangle.png')} style={{marginTop:180, backgroundColor:'pink'}}>
            <View style={{flex:4, backgroundColor:'pink'}}>
                {/* <View style={{}}> */}
                        <Image source={require('../Assets/tree.jpg')} style={{width:200, height:200, borderWidth:4, alignSelf:'center',
                    borderColor:'#fff', borderRadius:100, alignItems:'center', marginTop:-90}}/>
                    <Image style={{padding:10,marginLeft:230, marginTop:-50, width:40,height:40,borderRadius:20,backgroundColor:'#b3b3ff'}} source={require('../Assets/camera.png')} />
                {/* </View> */}
                
            </View>
            <Text style={{fontSize:28, color:'#000', fontWeight:'bold',
             textAlign:'center',justifyContent:'center', marginTop:70}}>James Boucher</Text>
             </ImageBackground>
             </View>
      </View>
  )
}
}

export default Task2;