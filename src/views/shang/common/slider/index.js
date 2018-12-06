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
      // obj :this.props.planObj.planName?this.props.planObj:this.props.arr[0]
    }
  }
  /**个人还款期数 */
  userFn (obj) {
    
  }
  
	render() {
    // let arr= this.props.arr,
    //     obj= this.state.obj;
		return (
      <View style={cs.slidebox}>
        <View style={[cs.header,coms.gfencen]}>
          <Text style={cs.title}>分期金额(元)</Text>
          <View style={coms.gceny}>
            <Text>{2342}</Text>
            <Image source={require('^/img/icon/xiugai.png')} style={cs.icon}/>
          </View>
        </View>
        <View>
          <Slider 
            maximumValue={500}
            minimumValue={50} 
            minimumTrackTintColor={require('^/img/icon/xian-yes.png')}
            maximumTrackTintColor={require('^/img/icon/xiab-no.png')}
            thumbImage={require('^/img/icon/slide.png')}
            trackImage ={require('^/img/icon/slide.png')}
          />
        </View>
      </View>
		)
	}
}