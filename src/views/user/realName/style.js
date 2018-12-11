import {
    StyleSheet
  } from 'react-native';
  import {res} from '^/cs/resect';

  
  let cs = StyleSheet.create({
    realwrap :{
      flex:1,
      paddingBottom:20
    },
    imgBox :{
      height:210,
      width:315,
      borderRadius:8,
      borderColor:res.e,
      borderWidth:1,
      borderStyle:'solid',
      
    },
    img :{
      borderRadius:5,
      height:190,
      width:295,
    },
    iconbox :{
      width:30,
      height:30,
      position:'absolute',
      top:-14,
      right:-14
    },
    icon :{
      width:30,
      height:30
    },
    text:{
      position:'absolute',
      bottom:52,
      width:'100%',
      textAlign:'center',
      fontSize:15,  
      color:res.gray3
    },
    mtitle :{
      lineHeight:50,
      textAlign:'center',
      fontSize:18,
      color:res.gray3
    },
    mbtn :{
      height:50,
      flex:1,
      textAlign:'center',
      lineHeight:50,
      fontSize:12,
      color:res.gray6
    },
    mbtnon:{
      color:res.blue
    },
    xian:{
      height:30,
      width:1,
      backgroundColor:res.c
    },
    mtext :{
      fontSize:14,
      textAlign:'center',
      paddingBottom:15
    },
    mlist :{
      flexDirection:'row',
      height:40,
      alignItems:'center'
    },
    minput :{
      textAlign:'right',
      flex:1,
      fontSize:12,
      color:res.gray6
    }
  });
  
  module.exports = cs;