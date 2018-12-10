import {
    StyleSheet
  } from 'react-native';
  import {res} from '^/cs/resect';

  
  let cs = StyleSheet.create({
    realwrap :{

    },
    listbox :{
      alignItems:'center'
    },
    imgBox :{
      height:210,
      width:315
    },
    text:{
      position:'absolute',
      bottom:52,
      width:'100%',
      textAlign:'center',
      fontSize:15,  
      color:res.gray3
    }
  });
  
  module.exports = cs;