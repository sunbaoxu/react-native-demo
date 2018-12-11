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
      paddingTop:10,
      flex:1
    },
    listMain :{
      backgroundColor:res.white,
      flex:1
    },
    listBox :{
      height:64,
      paddingLeft:15,
      paddingRight:15,
      justifyContent:'center',
      width:'100%'
    },
    listtitle :{
      fontSize:12,
      width:200,
      paddingBottom:8
    },
    qibox :{
      color:res.gray,
      fontSize:11,
      lineHeight:12
    },
    money :{
      color:res.blue,
      fontSize:11
    },
    router :{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-end'
    },
    icon :{
      width:14,
      height:14
    }
  });
  
  module.exports = cs;