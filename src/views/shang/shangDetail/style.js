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
      borderColor:res.eee,
      borderBottomWidth:1,
      borderStyle:'solid',
      height:64,
      paddingLeft:15,
      paddingRight:15,
      justifyContent:'center'
    },
    listtitle :{
      fontSize:12,
      width:200,
      paddingBottom:8
    },
    box:{
      flexDirection:'row'
    },
    qibox :{
      color:res.gray,
      fontSize:11,
      lineHeight:12
    },
    nper :{
      paddingTop:1
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
    },
  });
  
  module.exports = cs;