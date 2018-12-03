import {
    StyleSheet
  } from 'react-native';
  import {res} from '^/cs/resect';
  
  let cs = StyleSheet.create(
  {
    listWrap :{
      backgroundColor:res.themeColor,
      flex:1

    },
    listBody :{
      paddingTop:10
    },
    listMain :{
      backgroundColor:res.white
    },
    listBox :{
      height:54,
      paddingLeft:15,
      paddingRight:15
    },
    icon:{
      width:20,
      height:20,
      marginRight:5
    },
    title :{
      fontSize:16
    },
    name:{
      fontSize:14
    }
  });
  
  module.exports = cs;