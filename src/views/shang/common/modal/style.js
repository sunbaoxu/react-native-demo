import {
  StyleSheet
} from 'react-native';
import {res} from '^/cs/resect';

let cs = StyleSheet.create(
{
  header :{
    justifyContent:'flex-end'
  },
  flex :{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.4)'
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
    height:30
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
  },
  listmain :{
    flexWrap: 'wrap',
    display:'flex',
    flexDirection: 'row'
  },
  scrollbox :{
    paddingTop:10,
    paddingBottom:10,
    maxHeight:105
  },
  listbox :{
    width:'33.333%',
    height:50,
    paddingBottom:10
  },
  listcen :{
    alignItems:'center'
  },
  listrig :{
    alignItems:'flex-end'
  },
  borRadius :{
    borderRadius:4,
    backgroundColor:res.f0,
    width:96,
    height:40,
  },
  boron:{
    backgroundColor:res.blue,
  },
  list :{
    width:96,
    height:40,
    textAlign:'center',
    lineHeight:40,
    fontSize:12,
    color:res.gray6,
    backgroundColor:'transparent'
  },
  liston :{
    color:res.white
  },
  qicen:{
    marginLeft:10,
    marginRight:10
  }
});

module.exports = cs;