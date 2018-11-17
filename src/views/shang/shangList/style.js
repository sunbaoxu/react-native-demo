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
      marginBottom:10,
      borderColor:res.eee,
      borderBottomWidth:1,
      borderStyle:'solid',
      height:50
    }
  });
  
  module.exports = cs;