//import引入相关组件
import React, { Component } from 'react';

import {
	Text,
  View,
  Image
} from 'react-native';
import cs from './style';
import coms from '^/cs/coms';

export default class StatusBar extends Component{
  constructor(props){
    super(props);
  }
	render() {
    let obj = this.props.obj;
    console.log(obj,'aaaaa')
		return (
			<View style={cs.header}>
				<View style={cs.dl}>
          <View style={cs.dt}>
            <Image source={require('^/img/bus.png')} style={cs.dtimg}/>
          </View>
          <View style={cs.dd}>
            <Text style={cs.title}>{obj.orgShortName}</Text>
            <Text style={[cs.ddtext,coms.gTextOver]} numberOfLines={1}>{obj.orgAddrDetailed}</Text>
          </View>
        </View>
        <View style={cs.p}>
          <Text numberOfLines={2} style={cs.ptext}>{obj.remark}</Text>
        </View>
			</View>
		)
	}
}