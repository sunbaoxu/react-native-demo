import {
  StyleSheet
} from 'react-native';
import {res} from '^/cs/resect';

let cs = StyleSheet.create(
{
  modalBox:{
    backgroundColor:'rgba(0,0,0,0.4)',
    width:'100%',
    height:'100%',
    justifyContent:'flex-end'
  },
  main :{
    backgroundColor:res.white,
    paddingTop:10,
    paddingLeft:25,
    paddingRight:25
  },
  title:{
    fontSize:14,
    lineHeight:22,
    height:22
  },
  qibox :{
    height:30,

  },
  userbox :{
    height:45
  },




  btnbox :{
    backgroundColor:res.blue,
    height:50,
    width:'100%',
    textAlign:'center',
    lineHeight:50,
    fontSize:18,
    color:res.white
  },
  gray :{
    color:res.gray,
    fontSize:12
  },
  gray3:{
    color:res.gray3,
    fontSize:12
  },
  usertitle :{
    color:res.gray3,
    fontSize:14
  },
  userqi :{
    color:res.red,
    fontSize:14
  }
});

module.exports = cs;