import {
    StyleSheet
  } from 'react-native';
  import {res} from '^/cs/resect';
  
  let cs = StyleSheet.create(
  {
    userwarp :{
      flex:1,
      backgroundColor:res.f0
    },
    title :{
      fontSize:12,
      paddingLeft:15,
      height:34,
      lineHeight:34,
      color:res.gary6
    },
    listbox :{
      backgroundColor:res.white,
      paddingLeft:15
    }
  });
  
  module.exports = cs;