import {
    StyleSheet
  } from 'react-native';
  import {res} from '^/cs/resect';
  
  let cs = StyleSheet.create(
  {
    codeWrap :{
      backgroundColor:res.themeColor,
      flex:1

    },
    codeMain :{
      paddingTop:10,
    },
    input :{
      height:50,
      backgroundColor:res.white,
      paddingLeft:15,
      flex:1,
      paddingRight:15
    },
    iconBox :{
      backgroundColor:res.white,
      width:54,
      alignItems:'center',
      justifyContent:'center'
    },
    icon:{
      width:24,
      height:24
    },
    iconNo:{
      display:'none'
    },
    btnBox :{
      paddingTop:140,
      paddingLeft:15,
      paddingRight:15
    }
  });
  
  module.exports = cs;