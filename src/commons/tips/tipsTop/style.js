import {
  StyleSheet
} from 'react-native';
import {res} from '^/cs/resect';

let cs = StyleSheet.create(
{
  header :{
    backgroundColor:res.yellow,
    height:30,
    paddingLeft:15
  },
  icon :{
    height:20,
    width:20,
    marginRight:5
  },
  text :{
    fontSize:12
  }
});

module.exports = cs;