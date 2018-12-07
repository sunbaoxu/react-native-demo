import {
  StyleSheet
} from 'react-native';
import {res} from '^/cs/resect';

let cs = StyleSheet.create(
{
  slidebox :{
    backgroundColor:res.white,
    paddingLeft:15,
    paddingRight:15
  },
  header :{
    height:54,
  },
  title :{
    fontSize:16,
    // lineHeight:54
  },
  slider :{
    height:20
  },
  money :{
    height:40
  }
});

module.exports = cs;