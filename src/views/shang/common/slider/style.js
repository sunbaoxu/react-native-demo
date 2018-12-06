import {
  StyleSheet
} from 'react-native';
import {res} from '^/cs/resect';

let cs = StyleSheet.create(
{
  slidebox :{
    backgroundColor:res.white
  },
  header :{
    height:54,
    paddingLeft:15,
    paddingRight:15
  },
  title :{
    fontSize:16,
    // lineHeight:54
  },
  icon :{
    width:24,
    height:24,
    marginLeft:4
  }
});

module.exports = cs;