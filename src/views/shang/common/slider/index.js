//import引入相关组件
import React, { Component } from 'react';

import {
	Text,
  View,
  Slider,
  Image
} from 'react-native';
import cs from './style';
import coms from '^/cs/coms';

export default class SlideBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      moneyValNum:this.props.moneyValNum,
      obj :this.props.obj
    }
  }
  
	render() {
    let _this= this.state;

    console.log(_this.moneyValNum)
		return (
      <View style={cs.slidebox}>
        <View style={[cs.header,coms.gfencen]}>
          <Text style={cs.title}>分期金额(元)</Text>
          <View style={coms.gceny}>
            <Text>{_this.moneyValNum}</Text>
            <Image source={require('^/img/icon/xiugai.png')} style={cs.icon}/>
          </View>
        </View>
        <View>
          <Slider 
            maximumValue={_this.obj.money}
            minimumValue={3000}
            thumbImage={require('^/img/icon/slide1.png')}
            minimumTrackTintColor={'#3080ff'}
            maximumTrackTintColor={'#e4e7ed'}
            style={cs.slider}
            onValueChange ={(val)=>{
              this.setState({
                moneyValNum :val
              })
            }}
            value={_this.moneyValNum}
          />
          <View style={[coms.gfencen,cs.money]}>
            <Text style={{color:'#999',fontSize:15}}>3000</Text>
            <Text style={{color:'#999',fontSize:15}}>{_this.obj.money}</Text>
          </View>
        </View>
      </View>
		)
	}
}