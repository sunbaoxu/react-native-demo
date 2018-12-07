import {
    StyleSheet
  } from 'react-native';
  import {res} from '^/cs/resect';
  
  let cs = StyleSheet.create(
  {
    icon : {
      paddingTop:25,
      alignItems:'center',
      paddingBottom:50
    },
    imgBox :{
      shadowColor:res.eee,
      shadowOffset:{height:4,width:2},
      shadowRadius:2,
      shadowOpacity:1,
      width:70,
      height:70,
      marginBottom:15

    },
    iconImg :{
      width:70,
      height:70,
      overflow:'hidden',
      borderRadius:35
    },
    iconText :{
      fontSize:17,
      color:res.blue1
    },
    formBox:{
      backgroundColor:res.white,
      paddingLeft:30,
      paddingRight:30
    },
    listBox : {
      height:50,
      borderBottomColor:res.ccc,
      borderBottomWidth:1,
      borderStyle:'solid',
      justifyContent:'center'
    },
    listBox1:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    },
    listBox2 :{
      display:'none',
      backgroundColor:'red'
    },  
    passBtn :{
      height:'100%',
      color:res.gray,
      lineHeight:50,
      width:85,
      textAlign:'center',
      marginLeft:10,
      fontSize:12
    },
    yanImg : {
      width:85,
      height:30
    },
    passBtnOn:{
      color:res.blue
    },
    input:{
      height: 50,
      padding:0,
      fontSize:15,
      paddingLeft:15
    }
  });
  
  module.exports = cs;