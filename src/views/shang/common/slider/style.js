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
  icon :{
    width:24,
    height:24,
    marginLeft:4
  },
  slider :{
    height:20
  },
  money :{
    height:40
  }
});

module.exports = cs;