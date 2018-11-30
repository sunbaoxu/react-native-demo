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
    fontSize:12,
    flex:1,
    justifyContent:'center'

  },
  title:{
    color:res.blue,
    paddingBottom:4
  },
  ddtext :{
    color:res.gray
  }, 
  p:{
    marginBottom:14
  },
  ptext :{
    fontSize:10,
    color:res.gray6
  }
});

module.exports = cs;