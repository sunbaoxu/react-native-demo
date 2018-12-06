import {
    StyleSheet
  } from 'react-native';
  import {res} from '^/cs/resect';
  
  let cs = StyleSheet.create(
  {
    listWrap :{
      backgroundColor:res.f0,
      flex:1
    },
    listBody :{
      paddingTop:10
    },
    listMain :{
      backgroundColor:res.white,
      marginBottom:10
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
    icon1:{
      width:14,
      height:14
    },
    title :{
      fontSize:16
    },
    name:{
      fontSize:14
    },
    name:{
      color:res.gray
    }
  });
  
  module.exports = cs;