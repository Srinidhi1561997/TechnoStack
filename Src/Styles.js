import { StyleSheet, Dimensions } from "react-native";
// import { create } from "react-test-renderer";
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const Styles = StyleSheet.create({
buttonStyle:{
     paddingHorizontal:25,
     backgroundColor:'#F76951', 
     borderRadius:5,
     paddingVertical:15
},
buttonText:{
    textAlign:'center', 
    color:'#fff'
},
InputField:{
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 0.5, 
    borderColor: '#000',  
    padding: 5,
    alignItems: 'center',
    borderRadius:3
    // justifyContent: 'center'
},
input: {
    flex: 1,
    // marginTop:Platform.OS==="ios"? 0: -12,
    paddingLeft: 10,
    backgroundColor: 'transparent',
    color: '#ffffff',
    justifyContent: 'center',
    // height:40,
    // backgroundColor:'pink'
  },
})