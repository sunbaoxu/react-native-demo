import {
  StyleSheet
} from 'react-native';
import {res} from '^/cs/resect';

let cs = StyleSheet.create(
{
  header :{
    backgroundColor:res.white,
    padding:15,
    marginBottom:10
  },
  dl :{
    flexDirection:'row',
    height:50,
    marginBottom:14
  },
  dt :{
    width:50,
    height:50,
    marginRight:10
  },
  dtimg:{
    width:50,
    height:50
  },
  dd : {
    flex:1,
    justifyContent:'center'
  },
  title:{
    color:res.blue,
    paddingBottom:4,
    fontSize:12
  },
  ddtext :{
    color:res.gray,
    fontSize:12
  }, 
  ptext :{
    fontSize:12,
    color:res.gray6,
    lineHeight:18,
    paddingLeft:12,
    paddingRight:12,
    marginBottom:12,
    minHeight:18
  },
  btnbox :{
    flexDirection:'row',
    justifyContent:'center'
  },
  btntext :{
    fontSize:12,
    color:res.gray
  },
  icon : {
    width:15,
    height:15,
    transform: [{rotateZ:'90deg'}],
    marginRight:4
  },
  iconTop:{
    transform: [{rotateZ:'-90deg'}]
  }
});

module.exports = cs;