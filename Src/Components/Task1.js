import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import { Styles, windowHeight } from '../Styles';
import {Card} from 'react-native-paper';

class Task1 extends Component {
    constructor(props){
        super(props);
        this.state={
            url:'',
            Username:'',
            password:''
        }
    }
    onChangeText(key,value){
        this.setState({
          [key]:value
        })
      }
  render() {
  return (
      <View style={{backgroundColor:"#F76951", flex:1}}>
          <View style={{height:windowHeight/4, backgroundColor:'#f2f2f2'}}>  
                <Card style={{paddingHorizontal:15, backgroundColor:'#fff',
                 height:windowHeight/1.2, margin:20,borderRadius:10, marginTop:60}}>
                     <View style={{justifyContent:'center', alignItems:'center', paddingVertical:50}}>
                     <Image source={require('../Assets/app_logo.png')}/>
                     </View>
                     <View style={{flex:1}}>
                          <View style={Styles.InputField}>
                             <Image source={require('../Assets/link.png')} style={{padding:10, margin:10}}/>
                             <TextInput
                                defaultValue=''
                                value={this.state.url}
                                onChangeText={value=>this.onChangeText('url', value)}
                                style={Styles.input}
                                keyboardType='default'
                                placeholder='URL'
                                keyboardType='email-address'
                                placeholderTextColor= '#c2c2d6'
                            />
                          </View>
                         <View style={Styles.InputField}>
                             <Image source={require('../Assets/user.png')} style={{padding:10, margin:10}}/>
                             <TextInput
                                defaultValue=''
                                value={this.state.Username}
                                onChangeText={value=>this.onChangeText('Username', value)}
                                style={Styles.input}
                                keyboardType='default'
                                placeholder='Username'
                                keyboardType='email-address'
                                placeholderTextColor= '#c2c2d6'
                            />
                         </View>
                         <View style={Styles.InputField}>
                             <Image source={require('../Assets/padlock.png')} style={{padding:10, margin:10}}/>
                             <TextInput
                                defaultValue=''
                                // value={this.state.Password}
                                onChangeText={value=>this.onChangeText('Password', value)}
                                style={Styles.input}
                                keyboardType='default'
                                placeholder='Passwoord'
                                keyboardType='visible-password'
                                placeholderTextColor= '#c2c2d6'
                            />
                         </View> 
                     </View>
                     <View style={{flex:1}}>
                        <View style={{flexDirection:'column'}}>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                    <View style={{borderWidth:0.7, borderColor:'#000', paddingHorizontal:4, marginRight:5}}/>
                                <Text>
                                    Remember me
                                </Text>
                                </View>
                                <Text style={{color:'#F76951'}}>
                                    Forgot password?
                                </Text>
                            </View>
                            <View style={{padding:5}}/>
                            <View style={{flexDirection:'row'}}>
                                    <View style={{borderWidth:0.7, borderColor:'#000', paddingHorizontal:4, marginRight:5}}/>
                                <Text>
                                    I accept Terms & Condition
                                </Text>
                            </View>
                        </View>
                        <View style={{padding:10}}/>
                        <View style={{alignItems:'center'}}>
                        <TouchableOpacity style={{
                            // paddingHorizontal:25,
                            backgroundColor:'#F76951', 
                            borderRadius:5,
                            paddingVertical:15,
                            width:100,
                            alignItems:'center',
                        }}>
                            <Text style={{color:'#fff', textAlign:'center'}}>
                                Sign In
                            </Text>
                         </TouchableOpacity>
                         </View>
                     <View style={{paddingTop:20, flexDirection:'row', justifyContent:'center'}}>
                         <Text style={{color:'#F76951'}}>Privacy policy</Text>
                         <Text> and </Text>
                         <Text style={{color:'#F76951'}}>Terms & Conditions</Text>
                     </View>
                     </View>                        
                </Card>
                </View>
      </View>
  )
}
}

export default Task1;